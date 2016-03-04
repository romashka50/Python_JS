define([
    'collections/base',
    'models/user'
], function(BaseCollection, UserModel){
    var Users = BaseCollection.extend({
        model: UserModel,
        content: 'users'
    });

    return Users;
});

