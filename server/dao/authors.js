var Author = require("../models/authors.js");
// todo 5 (получить всех авторов, получить одного, создать автора, удалить автора, обновить автора(поле))create read update delete
/**
 * Send specific author entity by id
 * @param {Object} callback - HTTP request object
 * @returns {void}
 */
function getAuthors(callback) {
    Author.find({}, (err, result) => {
        callback && callback(err, result);
    });
}

function getAuthorById(id, callback){
    console.log(id);
    Author.find({'id':id}, (err, result) => {
        callback && callback(err, result);
    });
}
function addAuthor(author, callback) {
    Author.create(author, (err, result) => {
        callback && callback(err, result);
    });
}
function removeAuthor(id, callback){
    Author.destroy({'id' : id}, (err, result) => {
        callback && callback(err, result);
    });
}
function updateAuthor(author, callback){
    console.log(author);
    Author.findOneAndUpdate({'id':author.id},author,{new:true}, (err, result) => {
        callback && callback(err, result);
    });
}
function editAuthor(author, callback){
    Author.patch(author, (err, result) => {
        callback && callback(err, result);
    });
}


module.exports = {getAuthors,editAuthor, addAuthor, getAuthorById, removeAuthor, updateAuthor};