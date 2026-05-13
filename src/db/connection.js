const mongoose = require("mongoose");
const DB_NAME = require("../constant/dbname.js");

/**
 * Inserts the database name into a MongoDB URI correctly,
 * handling both plain URIs and URIs with query strings.
 *
 * e.g. mongodb+srv://user:pass@cluster/?appName=X  →  mongodb+srv://user:pass@cluster/prescripto?appName=X
 */
const buildMongoUri = (uri, dbName) => {
  // Check for unfilled placeholder
  if (uri.includes("<db_password>")) {
    console.warn(
      "⚠️  Atlas URI contains placeholder <db_password>. Falling back to local MongoDB."
    );
    return `mongodb://127.0.0.1:27017/${dbName}`;
  }

  try {
    const url = new URL(uri);
    // Only set the pathname if it is empty or just "/"
    if (!url.pathname || url.pathname === "/") {
      url.pathname = `/${dbName}`;
    }
    return url.toString();
  } catch {
    // If URL parsing fails, do a simple append
    return uri.includes("?")
      ? uri.replace("?", `/${dbName}?`)
      : `${uri}/${dbName}`;
  }
};

const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.error(
      "❌ MONGODB_URI is not defined. Falling back to local MongoDB."
    );
    // Fall back to local MongoDB so the server can still start
    process.env.MONGODB_URI = `mongodb://127.0.0.1:27017`;
  }

  const finalUri = buildMongoUri(process.env.MONGODB_URI, DB_NAME);

  try {
    const connectionInstance = await mongoose.connect(finalUri);
    console.log(
      `✅ MongoDB connected — host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    if (error.message.includes("127.0.0.1")) {
      console.error(
        "   → Make sure MongoDB is installed and running locally, OR set a valid MONGODB_URI in backend/.env"
      );
    }
    process.exit(1);
  }
};

module.exports = connectDB;
