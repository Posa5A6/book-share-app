# 📚 Book Share App

The **Book Share App** is a full-stack web platform that allows users to **share, discover, and request books** in a community-driven digital environment. It enables book owners to share physical or digital books, and readers to explore, request, and borrow from others.

---

## 🌍 Live App

- **Frontend**: [https://book-share-app.netlify.app](https://book-share-app.netlify.app)
- **Backend API**: [https://book-share-app-yt3y.onrender.com](https://book-share-app-yt3y.onrender.com)

---

## 📌 Key Features

✅ User Registration & Login  
📖 Browse books by title, author, genre  
📤 Upload books (title, author, genre, description, image)  
📩 Request to borrow books  
🗂️ Personal dashboard (shared books, requests)  
🔒 JWT-based authentication  
📱 Fully responsive (mobile + desktop)

---

## 🧩 Tech Stack

| Layer       | Tech                      |
|-------------|---------------------------|
| Frontend    | React.js, React Router, Axios |
| Backend     | Node.js, Express.js       |
| Database    | MongoDB + Mongoose        |
| Auth        | JWT, bcrypt               |
| Deployment  | Netlify (frontend), Render (backend)

---

## 🗃️ Folder Structure

```

book-share-app/
├── client/        # React frontend
│   └── src/
├── server/        # Express backend
│   ├── routes/
│   ├── models/
│   └── controllers/
└── README.md      # Main project readme

````

---

## ⚙️ Installation Instructions (Local)

### 1. Clone the Repository

```bash
git clone https://github.com/Posa5A6/book-share-app.git
cd book-share-app
````

---

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongo_db_connection
JWT_SECRET=your_jwt_secret
```

Run the backend:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd ../client
npm install
npm start
```

Open: `http://localhost:3000`

---

## 🔗 API Base URL

```
https://book-share-app-yt3y.onrender.com/api
```

---

## 🧪 Test API Endpoints (Live)

### 🔐 Auth APIs

#### Register

`POST /api/auth/register`
Body:

```json
{
  "name": "Narendra Posa",
  "email": "narendra@example.com",
  "password": "123456"
}
```

#### Login

`POST /api/auth/login`
Body:

```json
{
  "email": "narendra@example.com",
  "password": "123456"
}
```

---

### 📚 Book APIs

#### Add Book (Auth Required)

`POST /api/books/add`

Header: `Authorization: Bearer <token>`
Body:

```json
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "genre": "Fiction",
  "description": "A story about following your dreams"
}
```

#### Get All Books

`GET /api/books/`

#### Get Book by ID

`GET /api/books/:id`

---

### 📩 Book Request APIs

#### Send Request (Auth Required)

`POST /api/requests/send`

Body:

```json
{
  "bookId": "64a2d3..."
}
```

#### Get My Requests

`GET /api/requests/my-requests`

---

## 🌟 Live Usage Instructions

1. Open: [https://book-share-app.netlify.app](https://book-share-app.netlify.app)
2. Register/Login as a user
3. Add your own books
4. Browse and request books from others
5. View/manage your dashboard

---

## 🧑‍💻 Author

**Narendra Posa**
📧 Email: [narisnarendras6@gmail.com](mailto:narisnarendras6@gmail.com)
🔗 GitHub: [github.com/Posa5A6](https://github.com/Posa5A6)

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🙌 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch and open a PR

---

## 📣 Acknowledgements

* MongoDB University
* React & Express Communities
* Netlify & Render hosting platforms
* Open Source ❤️

---

> Built with 💻 by **Narendra Posa** — Empowering readers through community sharing!

```
