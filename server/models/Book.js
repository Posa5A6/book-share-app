const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  cover: { type: String, required: true }, // link instead of uploaded image
  file: { type: String, required: true },  // link instead of uploaded book
  uploadedBy: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
