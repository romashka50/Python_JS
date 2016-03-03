/**
 * Created by romab on 01.03.2016.
 */

var user = new UserModel();
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
    success : function (model, xhr, options) {
        initApp();
    },
    error   : function (model, xhr, options) {
        alert(xhr.statusText);
    }
});

function initView(){
    var userView = new View({collection: users});
}

function initApp() {
    users = new Users();
    users.fetch({reset: true});
    users.on('reset', initView);
}
