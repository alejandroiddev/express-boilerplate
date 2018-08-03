/* eslint-disable no-unused-vars */
module.exports = {
  createBook: async (req, res) => {
    console.log('createBook');
    res.send('respond with a resource');
  },
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
  },
};
