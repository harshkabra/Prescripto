const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Resolve upload directory relative to this file (→ backend/public/temp)
const uploadDir = path.resolve(__dirname, "../../public/temp");

// Ensure the directory exists
fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, uploadDir);
  },
  filename: function (_req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

module.exports = upload;
