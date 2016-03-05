define([
    'Backbone',
    'Underscore',
    'views/user/userItem',
    'text!templates/user.html'
], function(Backbone, _, ItemView, userTemplate){
    var View = Backbone.View.extend({
        el: '#container',
        tmpl: _.template(userTemplate),

        initialize: function(){
            this.render();
        },

        events: {
            'click td': 'onClick'
        },


        onClick: function () {
            console.log('----- clicked ---');
        },

        render    : function () {
            var self = this;
            var users = this.collection;

            this.$el.html(self.tmpl());

            users.forEach(function(userModel){
                var view = new ItemView({model: userModel});
            });

            return this;
        }
    });

    return View;
});