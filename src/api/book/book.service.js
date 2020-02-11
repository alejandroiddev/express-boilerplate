const Book = require('./book.model');

module.exports = {
  createBook: async (book) => {
    const newBook = new Book(book);
    return newBook.save();
  },
};
