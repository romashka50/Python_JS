/**
 * Created by romab on 26.02.2016.
 */
var mongoose = require('mongoose');

module.exports = function(){
    var User = mongoose.model('user');
    var crypto = require('crypto');

    this.create = function(req, res, next){
        var body = req.body;
        var user = new User(body);
        var shaSum = crypto.createHash('sha256');

        shaSum.update(body.pass);
        user.pass = shaSum.digest('hex');

        user.save(function(err, user){
            if(err){
                return next(err);
            }

            delete user.pass;
            res.status(201).send(user);
        });
    };

    this.getAll = function(req, res, next){
        User.find({}, {pass: 0}, function(err, users){
            if(err){
                return next(err);
            }

            res.status(200).send(users);
        });
    };

    this.getById = function(req, res, next){
        var id = req.params.id;

        User.findById(id, {pass: 0}, function(err, user){
            if(err){
                return next(err);
            }

            res.status(200).send(user);
        });
    };

    this.update = function(req, res, next){
        var id = req.params.id;
        var body = req.body;

        User.findByIdAndUpdate(id, {$set: body}, {new: true}, function(err, user){
            if(err){
                return next(err);
            }

            res.status(200).send(user);
        });
    }

    this.remove = function(req, res, next){
        var id = req.params.id;

        User.findByIdAndRemove(id, function(err, user){
            if(err){
                return next(err);
            }

            res.status(200).send(user);
        });
    };

    this.login = function(req, res, next){
        var body = req.body;
        var shaSum = crypto.createHash('sha256');

        shaSum.update(body.pass);
        body.pass = shaSum.digest('hex');

        User.findOne(body, function(err, user){
            if(err){
                return next(err);
            }

            if(!user){
                err = new Error('Bad request');
                err.status = 400;

                return next(err);
            }

            req.session.uId = user._id;
            req.session.loggedIn = true;

            delete user._doc.pass;

            res.status(200).send(user);
        });
    }
};