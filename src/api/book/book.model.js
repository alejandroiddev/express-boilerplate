const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema({
  title: { type: String, required: true, max: 100 },
  author: { type: String, required: true, max: 100 },
  year: { type: String, required: true, max: 100 },
  price: { type: Number, required: true },
}, {
  versionKey: false,
});

module.exports = mongoose.model('Book', BookSchema);
