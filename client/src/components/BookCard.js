import React from 'react';
import './BookCard.css';

const BookCard = ({ title, description, cover, file, uploadedBy }) => {
  return (
    <div className="book-card">
      <img src={cover} alt={title} className="book-cover" />

      <div className="book-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="uploaded-by">📚 Uploaded by: {uploadedBy}</p>
        <a href={file} target="_blank" rel="noopener noreferrer" className="download-btn">
          📥 View / Download
        </a>
      </div>
    </div>
  );
};

export default BookCard;
