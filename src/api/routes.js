const routes = require('express').Router();
const books = require('./book/book.router');

routes.use('/books', books);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
