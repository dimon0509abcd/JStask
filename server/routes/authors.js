'use strict';

const express = require('express');
const controller = require('../controllers/authors');

const router = express.Router();

// TODO Add other author routes
// метод. запрос('адрес', как отреагировать(метод)) express и переменные в запросе
router.get('/', controller.getAuthors);
router.get('/:id', controller.getAuthorById);
router.put('/:id', controller.updateAuthor);
router.patch('/:id', controller.editAuthor);
router.post('/', controller.addAuthor);
router.delete('/:id', controller.removeAuthor);



module.exports = router;

