import React, { useState } from 'react';
import api from '../services/api';
import './UploadBook.css';

const UploadBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    file: '',
    cover: '',
    uploadedBy: ''
  });

  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
     await api.post('/api/books/upload', formData);
      setSuccess(true);
      setMessage('✅ Book uploaded successfully!');
      setFormData({
        title: '',
        description: '',
        file: '',
        cover: '',
        uploadedBy: ''
      });
    } catch (error) {
      setSuccess(false);
      setMessage(
        error?.response?.data?.message || '❌ Failed to upload book.'
      );
      console.error(error);
    }
  };

  return (
    <div className="upload-container">
      <form className="upload-form" onSubmit={handleSubmit}>
        <h2>📤 Upload Book</h2>

        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Book Description"
          value={formData.description}
          onChange={handleChange}
          required
          rows="4"
        ></textarea>

        <input
          type="url"
          name="file"
          placeholder="Google Drive File URL"
          value={formData.file}
          onChange={handleChange}
          required
        />

        <input
          type="url"
          name="cover"
          placeholder="Google Drive Cover Image URL"
          value={formData.cover}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="uploadedBy"
          placeholder="Uploaded By"
          value={formData.uploadedBy}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>

        {message && (
          <p className={success ? 'success-msg' : 'error-msg'}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default UploadBook;
