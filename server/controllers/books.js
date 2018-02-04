'use strict';
var Books = require("../dao/books.js");

/** 
 * Send specific book entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function getBookById(req, res) {
    Books.getBook(
        function (err, result) {
            res.send(result);
        }
    )
    //TODO implement
}
function getBooks(req, res) {
    Books.getBooks(
        function (err, result) {
            res.send(result);
        }
    )
}


module.exports = {getBookById, getBooks};
//TODO add other methods

