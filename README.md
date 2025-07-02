
---

## 🛠️ `README.md` for Backend Repository (`estatepro-backend`)

```markdown
# 🧠 EstatePro Backend – Real Estate Property Management System

This is the **backend** server for EstatePro – a role-based real estate platform built using **Node.js**, **Express**, and **MongoDB**. It provides RESTful APIs for user management, property listings, appointments, leases, and admin operations.

---

## 🔐 Features

- JWT-based authentication and authorization
- Role-based access control (Admin, Agent, Landlord, Buyer)
- CRUD operations for properties
- Appointment booking APIs
- Lease and document management
- Notification system
- Admin overview dashboard data

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** for Auth
- **Multer** (for file uploads)
- **dotenv**, **cors**, **bcryptjs**

---

## 📁 Folder Structure

estatepro-backend/
├── controllers/
├── routes/
├── models/
├── middleware/
├── services/
├── uploads/ (for documents)
├── config/
│ └── db.js
├── .env
└── server.js
---

## 🔌 API Endpoints Overview

### 🔐 Auth
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/profile`

### 🏠 Properties
- `GET /api/properties`
- `POST /api/properties`
- `PUT /api/properties/:id`
- `DELETE /api/properties/:id`

### 📅 Appointments
- `POST /api/appointments`
- `GET /api/appointments/user`
- `PUT /api/appointments/:id/status`

### 📄 Leases
- `POST /api/leases/upload`
- `GET /api/leases`
- `GET /api/leases/:id`

### 🔔 Notifications
- `GET /api/notifications`
- `POST /api/notifications`
- `PUT /api/notifications/:id/read`

### 🧑‍💼 Admin
- `GET /api/admin/users`
- `GET /api/admin/overview`

---

## ▶️ How to Run

### Prerequisites:
- Node.js
- MongoDB (local or cloud)
- .env configuration

### Run Locally:

```bash
git clone https://github.com/hassanraza-sudo/estatepro-backend.git
cd ead_backend

npm install
npm run dev
