/**
 * Created by romab on 01.03.2016.
 */

var user = new UserModel();

user.urlRoot = function () {
    return '/login'
};

user.save({
    firstName: "Petya",
    lastName : "Pupkin",
    pass     : 'testtest'
}, {
    success: function (model, xhr, options) {
        createUsers();
    },
    error  : function (model, xhr, options) {
        alert(xhr.statusText);
    }
});

function createUsers(){
    var user1 = new UserModel({
        firstName: "User",
        lastName : "Ivanov_1",
        pass     : '111111',
        dateOfBirth: '1991-01-02'
    });

    user1.save(null, {
        success: user1.onSuccess,
        error: user1.onError
    });

    var user2 = new UserModel({
        firstName: "User_2",
        lastName : "Ivanov_2",
        pass     : '111111',
        dateOfBirth: '1991-01-02'
    });

    user2.save(null, {
        success: user1.onSuccess,
        error: user1.onError
    });
};
