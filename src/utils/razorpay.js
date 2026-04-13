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
  console.warn(
    "⚠️  Razorpay keys not configured. Payment features disabled."
  );
}

module.exports = razorpayInstance;
