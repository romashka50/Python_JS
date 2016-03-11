/**
 * Created by romab on 15.02.2016.
 */
var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);

var socket = require('socket.io')(server);
var consolidate = require('consolidate');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var MemoryStore = require('connect-mongo')(session);
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
    var sessionConfig = {
        mongooseConnection: db
    };
    var authStackMidlware = require('./helpers/auth');
    var postRouter;
    var UserHandler;
    var userRouter;
    var userHandler;


    port = parseInt(port, 10);

    require('./models/index');

    postRouter = require('./routers/posts');
    UserHandler = require('./handlers/user');
    userRouter = require('./routers/users');
    userHandler = new UserHandler();
    app.use(express.static(__dirname + '/public'));
    app.use(cookieParser("myTestPython"));
    app.use(session({
        name             : 'crm',
        key              : "myTestPython",
        secret           : '1q2w3e4r5tdhgkdfhgejflkejgkdlgh8j0jge4547hh',
        resave           : false,
        saveUninitialized: false,
        store            : new MemoryStore(sessionConfig)
    }));

    app.use(bodyParser.json());

    app.get('/', function (req, res, next) {
        res.sendFile(path.join(__dirname, 'index.html'));
    });

    app.post('/login', userHandler.login);

    app.use('/posts', authStackMidlware, postRouter);
    app.use('/users', authStackMidlware, userRouter);

    app.use(function(err, req, res, next){
        var status = err.status || 500;

        if (process.env.NODE_ENV === 'production') {
            res.status(status).send({error: err.message});
            console.error(err.message + '\n' + err.stack);
        } else {
            res.status(status).send({error: err.message + '\n' + err.stack});
            console.error(err.message + '\n' + err.stack);
        }
    });

    require('./helpers/sockets')(socket);

    server.listen(port, function () {
        console.log('server started at port', port);
    });
};

function error(err){
    throw err;
}