const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');

const dotenv = require('dotenv');

dotenv.config(); // Load .env file

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve uploaded files
app.use('/uploads/books', express.static('uploads/books'));
app.use('/uploads/covers',   express.static('uploads/covers'));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('✅ MongoDB Atlas connected');
}).catch((error) => {
    console.error('❌ MongoDB connection error:', error.message);
});

// Default route
app.get('/', (req, res) => {
    res.send('📚 Book Share App Backend Running!');
});
//user fetch
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);

  //aa

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
