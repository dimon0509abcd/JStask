var mongoose = require("mongoose");
var schema =  mongoose.Schema({
    id: 'string',
    firstName: 'string',
    secondName: 'string',
    email: 'string',
    birthDate: 'string'

});

var Author = mongoose.model('Author', schema);
module.exports = Author;
