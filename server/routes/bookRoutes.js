const express = require('express');
const router = express.Router();
const { uploadBook, getAllBooks } = require('../controllers/bookController');

// Simple JSON-based upload
router.post('/upload', uploadBook);
router.get('/', getAllBooks);

module.exports = router;
