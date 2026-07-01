# 🎬 Entertainment App

A full-stack Entertainment Web Application built using **React.js**, **Redux Toolkit**, **Node.js**, **Express.js**, and **MongoDB**. The application allows users to explore trending movies, TV series, search content, watch trailers, bookmark favorites, and securely manage their accounts.

---

## 🚀 Live Demo

### 🌐 Frontend
https://entertainment-app-react-phi.vercel.app

### ⚙️ Backend
https://entertainment-app-react.onrender.com

---

## ✨ Features

- 🔐 User Authentication (Signup & Login using JWT)
- 🎬 Browse Trending Movies
- 📺 Explore TV Series
- 🔍 Search Movies & TV Shows
- ⭐ Add/Remove Bookmarks
- 👤 User-specific Bookmarks
- 🎥 Watch Official Movie Trailers
- 📄 Detailed Movie Information
- 📱 Fully Responsive UI
- 🔒 Protected Routes
- 🚪 Secure Logout

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Redux Toolkit
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcryptjs
- MongoDB
- Mongoose

### Database
- Railway MongoDB

### Deployment
- Frontend: Vercel
- Backend: Render

### External API
- TMDB (The Movie Database) API

---

## 📁 Project Structure

```
Entertainment-App
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   ├── server.js
│   └── package.json
│
├── public
├── src
│   ├── components
│   ├── pages
│   ├── redux
│   ├── services
│   ├── routes
│   └── App.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Rohan7-cpu/Entertainment-app-React.git
```

Go to project

```bash
cd Entertainment-app-React
```

---

## Frontend Setup

```bash
npm install
npm start
```

Runs on:

```
http://localhost:3000
```

---

## Backend Setup

Go to backend folder

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

TMDB_API_KEY=your_tmdb_api_key
```

Start backend

```bash
npm run dev
```

Runs on:

```
http://localhost:5000
```

---

## 🔑 Environment Variables

Backend

```env
PORT=

MONGO_URI=

JWT_SECRET=

TMDB_API_KEY=
```

---

## 📸 Application Screens

- Splash Screen
- Login Page
- Signup Page
- Home (Trending)
- Search
- Movies
- TV Series
- Movie Details
- Trailer
- Bookmarks

---

## API Endpoints

### Authentication

```
POST /api/auth/register

POST /api/auth/login
```

### Bookmarks

```
GET    /api/bookmarks

POST   /api/bookmarks

DELETE /api/bookmarks/:id
```

---

## Security Features

- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Secure User Sessions
- Environment Variables for Sensitive Data

---

## Future Enhancements

- User Profile Page
- Recently Watched
- Dark/Light Theme
- Watchlist
- Ratings & Reviews
- Pagination
- Recommendation System

---

## 👨‍💻 Author

**Rohan Panda**

GitHub:
https://github.com/Rohan7-cpu

LinkedIn:
(Add your LinkedIn profile)

---

## ⭐ Support

If you found this project useful, don't forget to ⭐ the repository.
