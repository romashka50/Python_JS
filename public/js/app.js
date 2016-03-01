/**
 * Created by romab on 01.03.2016.
 */

var user = new UserModel();
var user1 = new UserModel({firstName: 'Vasya', dateOfBirth: '2015-01-03'}, {parse: true});
var users;
user.urlRoot = function () {
    return '/login'
};

user.save({
    firstName: "Petya",
    lastName : "Pupkin",
    pass     : 'testtest'
}, {
    validate: false,
    success: function (model, xhr, options) {
        fetchCollection();
    },
    error  : function (model, xhr, options) {
        alert(xhr.statusText);
    }
});

function fetchCollection(){
    users = new Users([{firstName: 'Vasya'}]);

    users.on('reset', function(){
        console.dir(users.toJSON());
    });

    console.dir(users.toJSON());
    users.fetch({reset: true});

    user1.save();
}
