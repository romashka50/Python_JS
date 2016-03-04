define([
    'Backbone',
    'Underscore',
    'text!templates/userItem.html'
], function(Backbone, _, itemTemplate){
    var View = Backbone.View.extend({
        el: '#content',
        /*tagName: 'tr',*/
        tmpl: _.template(itemTemplate),

        initialize: function(){
            this.render();
        },

        render    : function () {
            var self = this;
            var user = this.model.toJSON();

            this.$el.append(self.tmpl(user));

            return this;
        }
    });

    return View;
});