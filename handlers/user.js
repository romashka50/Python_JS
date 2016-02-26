/**
 * Created by romab on 26.02.2016.
 */
var mongoose = require('mongoose');

module.exports = function(){
    var User = mongoose.model('user');

    this.create = function(req, res, next){
        var body = req.body;
        var user = new User(body);

        user.save(function(err, user){
            if(err){
                return next(err);
            }

            res.status(201).send(user);
        });
    };

    this.getAll = function(req, res, next){
        res.status(200).send([1, 2, 3]);
    };

    this.getById = function(req, res, next){
        res.status(200).send(1);
    }
};