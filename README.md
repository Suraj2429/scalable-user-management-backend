# 🚀 Scalable Backend System (Node.js + Express + Prisma)

A production-ready backend system designed for scalable applications with authentication, profile management, media handling, KYC verification, admin moderation, and strict user validation workflows.

---

## 🚀 Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** PostgreSQL (Neon)
* **ORM:** Prisma (v7)
* **Authentication:** Firebase (Google/Phone) + JWT
* **File Upload:** Multer
* **API Docs:** Swagger

---

## 📂 Project Structure

```
src/
│
├── config/              # Config files (Prisma, Firebase, Multer, Swagger)
├── controllers/         # Route controllers
├── middleware/          # Auth, Validation, Admin, Block
├── routes/              # API routes
├── services/            # Business logic
├── utils/               # JWT utilities
│
├── app.js
└── server.js
```

---

## 🔐 Features

### ✅ Authentication

* Firebase Google / Phone login
* JWT-based authentication
* Token validation (invalid/expired handling)

---

### 👤 Profile System

* Profile onboarding
* Required fields validation
* Profile completion tracking

---

### 🖼️ Photo Upload

* API: `/media/upload-photo`
* Max 9 photos per user
* File validation (type + size)
* Versioned file naming
* Stored in database

---

### 🎥 KYC System

* API: `/media/upload-kyc`
* Video upload
* Status: `UNDER_REVIEW`
* URL stored in DB

---

### 🛡️ Admin Panel

* Approve / Reject KYC
* Role-based access control

---

### 🚫 User Validation (Core Logic)

Users are restricted unless:

* ✔ Profile completed
* ✔ At least 1 photo uploaded
* ✔ KYC uploaded

---

### 🚷 Block User System

* Block other users
* Prevent interaction
* Mutual block handling

---

### 📄 Swagger API Docs

* Available at: `http://localhost:5000/api-docs`
* Test APIs directly from browser

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone <your-repo-url>
cd backend
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Setup Environment Variables

Create `.env` file:

```env
DATABASE_URL=your_neon_database_url
JWT_SECRET=your_secret_key
```

---

### 4. Setup Firebase

* Add `firebase-service-key.json` inside `src/`
* Configure Firebase Admin SDK

---

### 5. Run Prisma Migration

```bash
npx prisma migrate dev
```

---

### 6. Start Server

```bash
node src/server.js
```

---

## 📡 API Endpoints

### 🔐 Auth

* `POST /api/auth/google`
---

### 👤 User

* `POST /api/user/complete-profile`
---

### 🖼️ Media

* `POST /media/upload-photo`
* `POST /media/upload-kyc`
---

### 🛡️ Admin

* `PATCH /api/admin/approve/:userId`
* `PATCH /api/admin/reject/:userId`
---

### 🚫 Block

* `POST /api/block/:userId`
---

## 🔐 Authentication Header

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 🧪 Testing

Use:

* Postman
* Swagger UI (`/api-docs`)

---

## ⚠️ Important Rules

* Users cannot access core features without:

  * Profile completion
  * Photo upload
  * KYC upload

---

## 🚀 Future Improvements

* Cloud storage (AWS S3 / Cloudinary)
* Rate limiting
* Logging system
* Refresh tokens
* Feed & matching system

---

## 🧠 Author

**Suraj Patil**
MCA Student | Backend Developer | DevOps Enthusiast

---

## ⭐ Final Note

This project demonstrates a **production-level backend architecture** with proper authentication, validation, and moderation workflows suitable for real-world applications.

---
