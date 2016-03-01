/**
 * Created by romab on 29.02.2016.
 */
var UserModel = Backbone.Model.extend({
    idAttribute: '_id',
    urlRoot: function(){
        return '/users/';
    },
    initialize: function(){
        this.on('change', function(){
            console.log('---- modelChanged ----');
        });
        this.on('change:firstName', function(model, val){
            console.log('model', model);
            console.log('val', val);
        });
    },

    onSuccess: function(model, xhr, options){
        console.log(model.get('firstName'), model.get('lastName'), 'saved with _id = ', model.id);
    },

    onError: function(model, xhr, options){
        console.log(xhr.statusText);
    }
});