var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ModelSchema = new Schema({
    pass: String,
    firstName  : String,
    lastName   : {type: String, default: 'Pupkin'},
    dateOfBirth: {type: Date, default: Date.now}
});
var Model = mongoose.model('user', ModelSchema);

module.exports = Model;