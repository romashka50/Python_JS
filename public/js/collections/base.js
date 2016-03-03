var BaseCollection = Backbone.Collection.extend({
    url: function(){
        return '/' + this.content + '/'
    }
});
