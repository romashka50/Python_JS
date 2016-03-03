var View = Backbone.View.extend({
    el: '#container',

    initialize: function(){
        this.collection.on('reset', this.render, this);
        this.collection.fetch({reset: true});
    },

    render    : function () {
        var self = this;

        this.collection.forEach(function(userModel){
            var user = userModel.toJSON();

            self.$el.append('<tr><td>' + user.firstName + '</td><td>'+ user.lastName + '</td></tr>');
        });

        return this;
    }
});