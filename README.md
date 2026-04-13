# Prescripto Backend API

Doctor Appointment Booking System — Backend built with **Node.js**, **Express**, and **MongoDB**.

## Features

- Admin, Doctor, and User authentication (JWT-based)
- Doctor management (CRUD, availability)
- Appointment booking & cancellation
- Razorpay payment integration (optional)
- Cloudinary image uploads (optional)
- Password reset via email (optional)

## Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- npm or yarn

## Quick Start

### 1. Install dependencies

```bash
cd backend
npm install
```

### 2. Configure environment

```bash
# Copy the example env file
cp .env.example .env
```

Edit `.env` and set **at minimum**:

| Variable       | Required | Description                         |
| -------------- | -------- | ----------------------------------- |
| `MONGODB_URI`  | ✅ Yes   | MongoDB connection string           |
| `JWT_SECRET_KEY` | ✅ Yes | Secret for signing JWT tokens       |
| `PORT`         | No       | Server port (default: `3000`)       |
| `RAZORPAY_KEY_ID` | No   | Razorpay key (payments disabled if empty) |
| `RAZORPAY_KEY_SECRET` | No | Razorpay secret                  |
| `CLOUDINARY_*` | No       | Cloudinary credentials for uploads  |
| `EMAIL_*`      | No       | Email service for password resets   |

### 3. Run the server

```bash
# Development (with auto-reload)
npm run server

# Production
npm start
```

You should see:

```
⚠️  Razorpay keys not configured. Payment features disabled.
✅ MongoDB connected successfully — host: localhost
Server is started at port 3000
```

### 4. Verify

```bash
curl http://localhost:3000/
# → {"status":"ok","message":"Prescripto API is running"}
```

## API Endpoints

| Base Path       | Description           |
| --------------- | --------------------- |
| `/api/admin`    | Admin operations      |
| `/api/doctor`   | Doctor operations     |
| `/api/user`     | User operations       |

## Project Structure

```
backend/
├── src/
│   ├── index.js              # Entry point
│   ├── app.js                # Express app setup
│   ├── constant/
│   │   └── dbname.js         # Database name
│   ├── controller/
│   │   ├── admin.controller.js
│   │   ├── doctor.controller.js
│   │   └── user.controller.js
│   ├── db/
│   │   └── connection.js     # MongoDB connection
│   ├── middlewares/
│   │   ├── adminAuth.middleware.js
│   │   ├── doctorAuthentication.js
│   │   ├── multer.middleware.js
│   │   └── userAuth.middleware.js
│   ├── models/
│   │   ├── admin.models.js
│   │   ├── appointment.models.js
│   │   ├── doctor.models.js
│   │   └── user.models.js
│   ├── routes/
│   │   ├── admin.routes.js
│   │   ├── doctor.routes.js
│   │   └── user.routes.js
│   └── utils/
│       ├── ApiError.js
│       ├── ApiResponse.js
│       ├── asyncHandler.js
│       ├── razorpay.js
│       ├── sendMail.js
│       └── uploadOnCLoudinary.js
├── public/temp/              # Temporary upload directory
├── .env.example              # Environment template
├── .gitignore
├── package.json
└── README.md
```

## Pushing to GitHub

```bash
cd backend
git init
git add .
git commit -m "fix: resolve all runtime errors, make Razorpay optional"
git remote add origin https://github.com/<your-username>/<your-repo>.git
git branch -M main
git push -u origin main
```

> **Note:** The `.env` file is excluded via `.gitignore` — your secrets will NOT be pushed.

## License

ISC
