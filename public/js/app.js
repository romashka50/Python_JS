define([
    'Backbone',
    'router',
    'socketio'
], function(Backbone, Router, socketio){
    function init(){
        var router = new Router();
        var io = socketio.connect();

        io.on('custom_response', function(data){
            console.log(data);
        });
        io.emit('custom_event', {a: 200, c: 300});

        Backbone.history.start({silent: true});
    }

    return {
        init: init
    };
});
