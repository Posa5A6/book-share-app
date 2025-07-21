# 📘 Book Share App — Backend (Server)

This is the **Node.js + Express** backend for the **Book Share App**, a community-based digital platform that allows users to **share, browse, and request books**.

It handles **authentication**, **book management**, **user data**, and **request logic**. Built with **MongoDB** for storage and **RESTful APIs** for frontend integration.

---

## 🌐 Base URL

```

[http://localhost:5000/api](http://localhost:5000/api)

```

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** + **Mongoose**
- **JWT** (JSON Web Tokens)
- **CORS**, **dotenv**, **bcrypt**
- **Multer / Cloudinary** (optional image upload support)

---

## 📂 Folder Structure

```

server/
├── controllers/        # Logic for books, users, auth, requests
├── models/             # Mongoose schemas
├── routes/             # API endpoints
├── middleware/         # Auth middleware, error handling
├── config/             # DB config, cloud config
├── .env                # Environment variables
├── server.js           # Entry point
└── README.md           # Project documentation

````

---

## ⚙️ Setup & Installation

1. **Clone the Repository**

```bash
git clone https://github.com/Posa5A6/book-share-app.git
cd book-share-app/server
````

2. **Install Dependencies**

```bash
npm install
```

3. **Environment Variables**

Create a `.env` file in the `server/` directory and add the following:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

4. **Run the Server**

```bash
npm run dev
```

The server will start on `http://localhost:5000`.

---

## 🧪 Test APIs (Postman / Thunder Client)

### ✅ User Routes

#### 🔹 Register

`POST /api/auth/register`

```json
{
  "name": "Narendra Posa",
  "email": "narendra@example.com",
  "password": "123456"
}
```

#### 🔹 Login

`POST /api/auth/login`

```json
{
  "email": "narendra@example.com",
  "password": "123456"
}
```

Returns: `JWT Token` & user info

---

### 📚 Book Routes

#### 🔹 Add a Book

`POST /api/books/add`
🔐 Requires token in headers:

```json
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "genre": "Fiction",
  "description": "A story about destiny and dreams"
}
```

#### 🔹 Get All Books

`GET /api/books/`

#### 🔹 Get Book by ID

`GET /api/books/:id`

#### 🔹 Delete Book

`DELETE /api/books/:id`
🔐 Requires token and ownership

---

### 🙋 User Profile

#### 🔹 Get My Profile

`GET /api/users/me`
🔐 Requires token

---

### 📩 Book Requests (Borrowing)

#### 🔹 Request a Book

`POST /api/requests/send`
🔐 Requires token

```json
{
  "bookId": "64ae27c3b91b402ddcba0d5a"
}
```

#### 🔹 Get My Requests

`GET /api/requests/my-requests`
`GET /api/requests/incoming-requests`
🔐 Requires token

#### 🔹 Accept / Reject a Request (Pending Implementation)

---

## 🔐 Authentication

This project uses **JWT-based Auth**. Include the token in the request headers:

```
Authorization: Bearer <your_token_here>
```

---

## 🔄 Sample API Usage (with Axios)

```js
// Fetch all books
axios.get('http://localhost:5000/api/books');

// Add new book
axios.post('http://localhost:5000/api/books/add', bookData, {
  headers: { Authorization: `Bearer ${token}` }
});
```

---

## 🔧 Future Enhancements

* 📦 File/image upload support (Cloudinary or Multer)
* 📧 Email notifications on request updates
* 🧑‍💼 Admin dashboard for managing users & content
* 📊 Book borrowing stats & trends

---

## 🧪 Testing Tools

* Use [Postman](https://www.postman.com/) or [Thunder Client (VSCode)](https://www.thunderclient.com/) to test endpoints.
* Enable `npm run dev` with `nodemon` for hot-reloads.

---

## ✍️ Author

**Narendra Posa**
🔗 GitHub: [Posa5A6](https://github.com/Posa5A6)
📧 Email: *[narisnarendras6@gmail.com](mailto:narisnarendras6@gmail.com)*

---

## 📄 License

This project is licensed under the **MIT License**.

---

```

