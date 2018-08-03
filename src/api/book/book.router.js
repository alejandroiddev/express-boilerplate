const router = require('express').Router();
const {
  getAllBooks, getBook, createBook, editBook, deleteBook,
} = require('./book.controller');

router.get('/', getAllBooks);

router.post('/', createBook);
router.put('/', editBook);
router.get('/:id', getBook);
router.delete('/', deleteBook);

module.exports = router;
