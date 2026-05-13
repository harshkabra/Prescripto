const Razorpay = require("razorpay");

let razorpayInstance = null;

if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
  try {
    razorpayInstance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    console.log("✅ Razorpay initialized successfully.");
  } catch (error) {
    console.error("❌ Razorpay initialization failed:", error.message);
    razorpayInstance = null;
  }
} else {
  // Razorpay keys are optional. Payment endpoints will return 503 if called.
  console.log("ℹ️  Razorpay keys not set — payment features are disabled.");
}

module.exports = razorpayInstance;
