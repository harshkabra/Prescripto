require("dotenv").config();
const app = require("./app.js");
const connectDB = require("./db/connection.js");

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });
    app.listen(PORT, () => {
      console.log(`Server is started at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection Failed:", error.message);
    process.exit(1);
  });
