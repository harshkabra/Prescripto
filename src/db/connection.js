const mongoose = require("mongoose");
const DB_NAME = require("../constant/dbname.js");

const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.error(
      "❌ MONGODB_URI is not defined in environment variables. Please set it in your .env file."
    );
    process.exit(1);
  }

  try {
    const connectionInstance = await mongoose.connect(
      `${mongoUri}/${DB_NAME}`
    );
    console.log(
      `✅ MongoDB connected successfully — host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
