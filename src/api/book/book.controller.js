const bookService = require('./book.service');
const log = require('../../config/logger');

module.exports = {
  createBook: async (req, res) => {
    try {
      // todo: validate request (woops it is already validated by mongoose!
      const resultBook = await bookService.createBook(req.body);
      res.status(201).send(resultBook); // todo: model book to dto
    } catch (e) {
      console.log(e);
      log.error(e);
      res.status(401).send({ errors: e.errors });
    }
  },
  /*
  editBook: async (req, res) => {
    // just an example of maybe updating the user
    req.user.name = req.params.name;
    // save user ... etc
    res.json(req.user);
  },
  getAllBooks: async (req, res) => {
    console.log('getAllBooks');
    res.send('respond with a resource');
  },
  getBook: async (req, res, next, id) => {
    console.log('getBook');
    // sample user, would actually fetch from DB, etc...
    req.user = {
      id,
      name: 'TJ',
    };
    //res.json(req.user);
    next();
  },
  deleteBook: async (req, res, next) => {
    next(new Error('not implemented'));
  },*/
};
