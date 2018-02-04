var Book = require("../models/books.js");
// todo 5 (получить всех авторов, получить одного, создать автора, удалить автора, обновить автора(поле))create read update delete
/**
 * Send specific author entity by id
 * @param {Object} callback - HTTP request object
 * @returns {void}
 */
function getBooks(callback) {
    Book.find({}, (err, result) => {
        callback && callback(err, result);
    });
}

function getBook(book, callback){
    Book.find(book, (err, result) => {
        callback && callback(err, result);
    });
}
function createBook(book, callback) {
    Book.create(book, (err, result) => {
        callback && callback(err, result);
    });
}
function removeBook(book, callback){
    Book.delete(book, (err, result) => {
        callback && callback(err, result);
    });
}
function updateBook(book, callback){
    Book.update(book, (err, result) => {
        callback && callback(err, result);
    });
}


module.exports = {getBooks, createBook, getBook, removeBook, updateBook};