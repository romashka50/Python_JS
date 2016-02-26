/**
 * Created by romab on 15.02.2016.
 */
var express = require('express');
var app = express();
var consolidate = require('consolidate');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var DB_HOST;
var DB_NAME;
var DB_PORT;
var connectionOptions;
var db;

var env = process.env.NODE_ENV;

require('./config/' + env);

DB_HOST = process.env.DB_HOST;
DB_NAME = process.env.DB_NAME;
DB_PORT = parseInt(process.env.DB_PORT, 10);

connectionOptions = {
    server: {poolSize: 5},
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    w: 1,
    j: true
};

mongoose.connect(DB_HOST, DB_NAME, DB_PORT, connectionOptions);
db = mongoose.connection;
db.once('connected', onConnection);
db.on('error', function(err){
    throw err;
});


function onConnection() {
    var port = process.env.PORT || 3030;
    var postRouter;
    var userRouter;

    port = parseInt(port, 10);

    require('./models/index');

    postRouter = require('./routers/posts');
    userRouter = require('./routers/users');

    app.use(bodyParser.json());

    app.get('/', function (req, res, next) {
        res.sendFile(path.join(__dirname, 'index.html'));
    });

    app.use('/posts', postRouter);
    app.use('/users', userRouter);

    app.listen(port, function () {
        console.log('server started at port', port);
    });
};
function error(err){
    throw err;
}