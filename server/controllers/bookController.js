const Book = require('../models/Book');

const uploadBook = async (req, res) => {
  try {
    const { title, description, cover, file, uploadedBy } = req.body;

    // Basic validation
    if (!title || !file || !cover || !uploadedBy) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newBook = new Book({ title, description, cover, file, uploadedBy });
    await newBook.save();

    res.status(201).json({ message: 'Book link added successfully and book is added ', book: newBook });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading book', error: error.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error: error.message });
  }
};

module.exports = { uploadBook, getAllBooks };
