define([
    'Backbone',
    'Underscore',
    'text!templates/user.html'
], function(Backbone, _, userTemplate){
    var View = Backbone.View.extend({
        el: '#container',
        tmpl: _.template(userTemplate),

        initialize: function(){
            this.render();
        },

        render    : function () {
            var self = this;
            var users = this.collection.toJSON();

            this.$el.append(self.tmpl({users: users}));

            return this;
        }
    });

    return View;
});