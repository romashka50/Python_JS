/**
 * Created by romab on 04.03.2016.
 */
require.config({
    paths: {
        Backbone: 'libs/backbone/backbone',
        Underscore: 'libs/underscore/underscore',
        jQuery: 'libs/jquery/dist/jquery',
        text: 'libs/text/text',
        socketio: '/socket.io/socket.io',
        collections: 'collections',
        views: 'views',
        models: 'models',
        templates: '../templates'
    },
    shim: {
        Underscore: {
            exports: '_'
        },
        Backbone: ['Underscore', 'jQuery'],
        app: ['Backbone']
    }
});

require(['app'], function(app){
    app.init();
});