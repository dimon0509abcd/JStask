'use strict';

const express = require('express');
const controller = require('../controllers/books');

const router = express.Router();

// TODO Add other author routes
// метод. запрос('адрес', как отреагировать(метод)) express и переменные в запросе
router.get('/', controller.getBooks);
router.get('/:id', controller.getBookById);
//router.put('/:id', controller.updateBook);
//router.patch('/:id', controller.editBook);
//router.post('/', controller.addBook);
//router.delete('/:id', controller.removeBook);



module.exports = router;