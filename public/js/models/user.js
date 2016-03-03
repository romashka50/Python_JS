/**
 * Created by romab on 29.02.2016.
 */
var UserModel = Backbone.Model.extend({
    idAttribute: '_id',
    urlRoot    : function () {
        return '/users/';
    },
    initialize : function () {
        this.on('change', function () {
            console.log('---- modelChanged ----');
        });
        this.on('change:firstName', function (model, val) {
            console.log('model', model);
            console.log('val', val);
        });
        this.on('invalid', function (model, validationError) {
            console.log(model, validationError);
        });
    },

    parse: function (response) {
        if (response.dateOfBirth) {
            response.age = (new Date() - new Date(response.dateOfBirth)) / (1000 * 60 * 60 * 24 * 365)
        }

        return response;
    },

    /*validate: function (attributes) {
        var errors = [];

        if (!attributes.age) {
            errors.push('Age must be provided');
        } else if (attributes.age && attributes.age < 18) {
            errors.push('Age must be > 18');
        }

        if (errors.length) {
            return errors;
        }
    }*/
});