/**
 * Created by romab on 01.03.2016.
 */
var Users = Backbone.Collection.extend({
    model: UserModel,
    url: '/users/'
});
