define([
    'Backbone',
    'Underscore',
    'text!templates/userItem.html'
], function(Backbone, _, itemTemplate){
    var View = Backbone.View.extend({
        /*el: '#container',*/
        tagName: 'tr',
        tmpl: _.template(itemTemplate),

        initialize: function(){
            this.render();
        },

        render    : function () {
            var self = this;
            var user = this.model.toJSON();

            this.$el.html(self.tmpl(user));

            return this;
        }
    });

    return View;
});