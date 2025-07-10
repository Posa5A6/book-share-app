import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import './BooksList.css';
import api from '../services/api'; // Axios instance

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await api.get('/api/books'); // ensure this route works in backend
        setBooks(res.data);
      } catch (err) {
        console.error(err);
        setError('❌ Failed to load books');
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="books-list-page">
      <h2>📚 Available Books</h2>

      {error && <p className="error-msg">{error}</p>}

      <div className="books-grid">
        {books.length > 0 ? (
          books.map((book, idx) => (
            <BookCard
              key={idx}
              title={book.title}
              description={book.description}
              cover={book.cover}
              file={book.file}
              uploadedBy={book.uploadedBy}
            />
          ))
        ) : (
          !error && <p className="no-books">No books uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default BooksList;
