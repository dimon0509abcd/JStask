//todo make me
var mongoose = require("mongoose");
var schema =  mongoose.Schema({
    id: 'string',
    name: 'string',
    year: 'string'

});

var Book = mongoose.model('Book', schema);
module.exports = Book;