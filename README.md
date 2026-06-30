# 📌 Project2 Backend (Node.js + Express + MongoDB)

## 🚀 Overview
Backend project built with **Node.js**, **Express**, and **MongoDB**.  
Includes:
- User authentication with JWT
- CRUD operations for Users and Categories
- RESTful API routes

---

## ⚙️ Setup Instructions

### 1. Install dependencies
```bash
npm install

2. Configure environment variables
Create a .env file in the root directory:

env
PORT=5000
MONGO_URI=mongodb://localhost:27017/project2
JWT_SECRET=yourSecretKeyHere

3. Run the server
bash
npm start
Server runs at: http://localhost:5000/api
API Endpoints
User Routes
POST /api/users → Create user

GET /api/users → Get all users

PUT /api/users/:id → Update user

DELETE /api/users/:id → Delete user

POST /api/users/login → Login (JWT)

Category Routes
POST /api/category → Create category

GET /api/category → Get all categories

GET /api/category/:id → Get category by ID

PUT /api/category/:id → Update category

DELETE /api/category/:id → Delete category

Tech Stack

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication


