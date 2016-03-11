define([
    'Backbone'
], function (Backbone) {
    var Router = Backbone.Router.extend({
        routes: {
            'pythonJs(/:content)': 'goToContent',
            '*any': 'goToDashboard'
        },

        goToContent: function (content) {
            var self = this;
            var collectionUrl;
            var viewUrl;

            if (!content){
                return self.goToDashboard();
            }

            collectionUrl = 'collections/' + content;
            viewUrl = 'views/' + content + '/' + content;

            require([collectionUrl, viewUrl], function(Collection, View){
                var collection = new Collection();

                self.collection = collection;
                collection.on('reset', function(){
                    self.renderView(View);
                });
                collection.fetch({reset: true});
            });
        },

        renderView: function(View){
            if (this.view){
                this.view.undelegateEvents();
            }

            this.view = new View({collection: this.collection});
        },

        goToDashboard: function(){
            console.log('---- go to dashboard ----');
        }
    });

    return Router;
});