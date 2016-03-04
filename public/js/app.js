define([
    'views/user',
    'collections/user'
], function(UserView, UserCollection){

    function renderView(){
        return new UserView({collection: this});
    }

    function init(){
        var collection = new UserCollection();

        collection.on('reset', renderView);
        collection.fetch({reset: true});
    }

    return {
        init: init
    };
});
