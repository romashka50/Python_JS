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

        render    : function () {
            var self = this;
            var users = this.collection;
            var $tableBody;

            this.$el.html(self.tmpl());
            $tableBody = this.$el.find('#content');

            users.forEach(function(userModel){
                var view = new ItemView({model: userModel});

                $tableBody.append(view.$el);
            });

            return this;
        }
    });

    return View;
});