import React, { useEffect, useState } from 'react';
import api from '../services/api';
import './Home.css';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [visibleBooks, setVisibleBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('newest');
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    api.get('/api/books')
      .then((res) => {
        const sorted = sortBooks(res.data, sort);
        setBooks(sorted);
        setVisibleBooks(sorted.slice(0, itemsPerPage));
      })
      .catch((err) => console.error('Failed to fetch books:', err));
  }, []);

  useEffect(() => {
    let filtered = books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.uploadedBy.toLowerCase().includes(search.toLowerCase())
    );

    filtered = sortBooks(filtered, sort);
    const start = 0;
    const end = page * itemsPerPage;
    setVisibleBooks(filtered.slice(start, end));
  }, [search, sort, page]);

  const sortBooks = (books, criteria) => {
    switch (criteria) {
      case 'newest':
        return [...books].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      case 'title-az':
        return [...books].sort((a, b) => a.title.localeCompare(b.title));
      case 'title-za':
        return [...books].sort((a, b) => b.title.localeCompare(a.title));
      default:
        return books;
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">📘 Book Share Portal</h1>
      <p className="home-subtitle">Students can upload and explore shared resources</p>

      <div className="controls">
        <input
          type="text"
          placeholder="🔍 Search by title or uploader"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="sort-select">
          <option value="newest">🕒 Newest First</option>
          <option value="title-az">🔤 Title A-Z</option>
          <option value="title-za">🔠 Title Z-A</option>
        </select>
      </div>

      <h2 className="book-heading">📚 Shared Books</h2>

      {visibleBooks.length === 0 ? (
        <p className="no-books">No matching books found.</p>
      ) : (
        <div className="book-grid">
          {visibleBooks.map((book) => (
            <div key={book._id} className="book-card">
              {book.cover && <img src={book.cover} alt="cover" className="book-cover" />}
              <h3>{book.title}</h3>
              <p>{book.description}</p>
              <p><strong>Uploaded by:</strong> {book.uploadedBy}</p>
              {book.file && (
                <a href={book.file} target="_blank" rel="noopener noreferrer" className="book-link">
                  📖 View Book
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {visibleBooks.length < books.length && (
        <div className="load-more">
          <button onClick={handleLoadMore}>⏬ Load More</button>
        </div>
      )}
    </div>
  );
};

export default Home;
