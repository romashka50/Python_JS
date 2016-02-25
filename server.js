/**
 * Created by romab on 15.02.2016.
 */
var express = require('express');
var app = express();
var consolidate = require('consolidate');
var postRouter = require('./routers/posts');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db;
/*var mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://localhost:28017/pythonTest', function (err, db) {
    if (err) {
        throw err;
    }

    db.listCollections().toArray(function (err, collections) {
        if (err) {
            db.close();
            throw err;
        }

        collections.forEach(function (collection) {
            db.collection(collection.name).drop(function (err, reply) {
                if (err) {
                    return console.error(err);
                }

                console.dir(reply);
            });
        });
    });

    app.engine('html', consolidate.swig);

    app.set('view engine', 'html');
    app.set('views', __dirname + '/views');

    app.get('/', function (req, res, next) {
        db.collection('users').insert({
            firstName  : 'Ivan',
            lastName   : 'Pupkin',
            dateOfBirth: new Date('1987-02-03')
        }, function (err, result) {
            if (err) {
                return next(err);
            }

            console.dir(result);
            res.status(201).send(result);
        });
    });

    app.get('/users', function (req, res, next) {
        res.render('users.html', {name: 'Pupkin', body: 'Hello World'});
    });

    app.use(function (req, res, next) {
        console.log(req.ip);
        req.myName = 'Ivan';

        next();
    });

    app.use(bodyParser.json());

    app.post('/users', function (req, res, next) {
        console.log('first call');
        next();
    }, function (req, res, next) {
        console.log(req.myName);
        console.log(req.body);
        res.status(200).send('Hello users');
    });

    app.use('/posts', postRouter);

    app.get('/lala', function (req, res, next) {
        res.status(200).send('sjhdgfjhsdgfjgsdgfjsdgf');
    });

    app.listen(3030, function () {
        console.log('server started at port 3030');
    });
});*/
/*mongoose.connect('localhost', 'pythonTest', 28017);
db = mongoose.connection;
db.once('connected', onConnection);
db.on('error', function(err){
    throw err;
});*/

var db1 = mongoose.createConnection('localhost', 'pythonTest', 28017);
var db2 = mongoose.createConnection('localhost', 'jsPro', 27017);

db1.once('connected', onConnection);
db2.once('connected', function(){
        console.log('--- connected ----');
});
db1.on('error', function(err){
    throw err;
});

db2.on('error', error);

function onConnection() {

    /*db.listCollections().toArray(function (err, collections) {
        if (err) {
            db.close();
            throw err;
        }

        collections.forEach(function (collection) {
            db.collection(collection.name).drop(function (err, reply) {
                if (err) {
                    return console.error(err);
                }

                console.dir(reply);
            });
        });
    });*/

    app.engine('html', consolidate.swig);

    app.set('view engine', 'html');
    app.set('views', __dirname + '/views');

    app.get('/', function (req, res, next) {
        db.collection('users').insert({
            firstName  : 'Ivan',
            lastName   : 'Pupkin',
            dateOfBirth: new Date('1987-02-03')
        }, function (err, result) {
            if (err) {
                return next(err);
            }

            console.dir(result);
            res.status(201).send(result);
        });
    });

    app.get('/users', function (req, res, next) {
        res.render('users.html', {name: 'Pupkin', body: 'Hello World'});
    });

    app.use(function (req, res, next) {
        console.log(req.ip);
        req.myName = 'Ivan';

        next();
    });

    app.use(bodyParser.json());

    app.post('/users', function (req, res, next) {
        console.log('first call');
        next();
    }, function (req, res, next) {
        console.log(req.myName);
        console.log(req.body);
        res.status(200).send('Hello users');
    });

    app.use('/posts', postRouter);

    app.get('/lala', function (req, res, next) {
        res.status(200).send('sjhdgfjhsdgfjgsdgfjsdgf');
    });

    app.listen(3030, function () {
        console.log('server started at port 3030');
    });
};
function error(err){
    throw err;
}