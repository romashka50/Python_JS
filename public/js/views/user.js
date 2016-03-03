var View = Backbone.View.extend({
    //el: '#container',
    tagName   : 'a',
    className : 'my-class',
    id        : 'testAttr',
    attributes: {'data-name': 'Pupkin'},
    render    : function () {
        this.$el.html('<span>Test View</span>');

        return this;
    }
});