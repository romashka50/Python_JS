var View = Backbone.View.extend({
    el: '#container',

    render    : function () {
        this.$el.html('<span>Test View</span>');

        return this;
    }
});