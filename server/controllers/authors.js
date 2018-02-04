'use strict';
var Authors = require("../dao/authors.js");

//express js почитать документацию req и res
// контроллер реагирует на запросы к сайту(логика)

/**
 * Send specific author entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function getAuthors(req, res) {
    Authors.getAuthors(
        function (err, result) {
            res.send(result);
        }
    )
}
/**
 * Send specific author entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function getAuthorById(req, res) {
    //TODO implement
    console.log(req.params);
    Authors.getAuthorById(
        req.params.id,
        function (err, result) {
            res.send(result);
        }
    )
}
/**
 * Send specific author entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function addAuthor(req, res) {
    console.log(req.body);
    Authors.addAuthor(req.body, (err, result) => {
        //добавить проверку, что такой автор есть, что все поля нужные есть(5хх)
        res.status(201).json(result);

    });
    //TODO implement
}

/**
 * Send specific author entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function removeAuthor(req, res) {
    console.log(req.body);
    Authors.removeAuthor(req.body, (err, result) => {
        res.status(201).json(result);

    });
    //TODO implement
}
function editAuthor(req, res) {
    console.log(req.query);
    Authors.editAuthor(req.body, (err, result) => {
        res.status(201).json(result);

    });
    //TODO implement
}



/**
 * Send specific author entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function updateAuthor(req, res) {
    Authors.updateAuthor(req.body, (err, result) => {
        res.status(201).json(result);

    });
    //TODO implement
}

//TODO add other methods


module.exports = {getAuthors,editAuthor, addAuthor, getAuthorById, removeAuthor, updateAuthor};