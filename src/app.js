const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// routers
const adminRouter = require("./routes/admin.routes.js");
const doctorRouter = require("./routes/doctor.routes.js");
const userRouter = require("./routes/user.routes.js");

const app = express();

// CORS middleware — configurable via CORS_ORIGINS env var (comma-separated)
const allowedOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(",").map((o) => o.trim())
  : [];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g. mobile apps, curl, Postman)
    if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// cookie parser middleware
app.use(cookieParser());

// API endpoints
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

// Health check
app.get("/", (_req, res) => {
  res.json({ status: "ok", message: "Prescripto API is running" });
});

module.exports = app;
