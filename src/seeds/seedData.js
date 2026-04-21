require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const DB_NAME = require("../constant/dbname.js");

// Import models
const DoctorModel = require("../models/doctor.models.js");
const UserModel = require("../models/user.models.js");
const AppointmentModel = require("../models/appointment.models.js");

const buildMongoUri = (uri, dbName) => {
  if (uri.includes("<db_password>")) {
    console.warn("⚠️  Atlas URI contains placeholder. Falling back to local MongoDB.");
    return `mongodb://127.0.0.1:27017/${dbName}`;
  }

  try {
    const url = new URL(uri);
    if (!url.pathname || url.pathname === "/") {
      url.pathname = `/${dbName}`;
    }
    return url.toString();
  } catch {
    return uri.includes("?")
      ? uri.replace("?", `/${dbName}?`)
      : `${uri}/${dbName}`;
  }
};

const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.error("❌ MONGODB_URI is not defined. Falling back to local MongoDB.");
    process.env.MONGODB_URI = `mongodb://127.0.0.1:27017`;
  }

  const finalUri = buildMongoUri(process.env.MONGODB_URI, DB_NAME);

  try {
    const connectionInstance = await mongoose.connect(finalUri);
    console.log(
      `✅ MongoDB connected — host: ${connectionInstance.connection.host}`
    );
    return connectionInstance;
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

// Sample doctor data
const doctorsData = [
  {
    fullName: "dr. richard james",
    email: "drjames@gmail.com",
    password: "Doctor@123",
    speciality: "general physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine and overall wellness strategies. With a keen eye for detail.",
    fees: 50,
    address: { line1: "17th Cross, Richmond", line2: "Richmond, London" },
    availability: "Available",
    profile_image:
      "https://res.cloudinary.com/ddz3q4jti/image/upload/v1735043929/doctor_profile_1_ypjprq.png",
  },
  {
    fullName: "dr. emily larson",
    email: "drlarson@gmail.com",
    password: "Doctor@123",
    speciality: "gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Larson specializes in women's health with a compassionate approach to patient care. She is dedicated to providing the highest quality healthcare to her patients.",
    fees: 60,
    address: { line1: "27th Avenue, New York", line2: "New York, USA" },
    availability: "Available",
    profile_image:
      "https://res.cloudinary.com/ddz3q4jti/image/upload/v1735043929/doctor_profile_2_jgx6zu.png",
  },
  {
    fullName: "dr. sarah patel",
    email: "drpatel@gmail.com",
    password: "Doctor@123",
    speciality: "dermatologist",
    degree: "MBBS, MD",
    experience: "5 Years",
    about:
      "Dr. Patel is an experienced dermatologist with expertise in treating various skin conditions. She believes in personalized and holistic approach to skincare.",
    fees: 70,
    address: { line1: "42nd Street, Los Angeles", line2: "Los Angeles, USA" },
    availability: "Available",
    profile_image:
      "https://res.cloudinary.com/ddz3q4jti/image/upload/v1735043929/doctor_profile_3_uetx5d.png",
  },
  {
    fullName: "dr. christopher lee",
    email: "drlee@gmail.com",
    password: "Doctor@123",
    speciality: "pediatricians",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Lee is a dedicated pediatrician with a passion for providing excellent care to children. His approach is friendly and patient-focused.",
    fees: 40,
    address: { line1: "52nd Boulevard, Chicago", line2: "Chicago, USA" },
    availability: "Available",
    profile_image:
      "https://res.cloudinary.com/ddz3q4jti/image/upload/v1735043929/doctor_profile_4_w2d9m0.png",
  },
  {
    fullName: "dr. anthony lopez",
    email: "drlopez@gmail.com",
    password: "Doctor@123",
    speciality: "neurologist",
    degree: "MBBS, MD",
    experience: "6 Years",
    about:
      "Dr. Lopez specializes in neurology with extensive experience in treating neurological disorders. He is committed to improving patient outcomes through advanced medical practices.",
    fees: 80,
    address: { line1: "62nd Lane, Houston", line2: "Houston, USA" },
    availability: "Available",
    profile_image:
      "https://res.cloudinary.com/ddz3q4jti/image/upload/v1735043929/doctor_profile_5_z0qc2n.png",
  },
];

// Sample user data
const usersData = [
  {
    fullName: "john doe",
    email: "john@gmail.com",
    password: "User@1234",
    phone: "9876543210",
    gender: "Male",
    date_of_birth: "1990-05-15",
    address: { line1: "123 Main St", line2: "New York, NY" },
  },
  {
    fullName: "jane smith",
    email: "jane@gmail.com",
    password: "User@1234",
    phone: "8765432109",
    gender: "Female",
    date_of_birth: "1992-08-22",
    address: { line1: "456 Oak Ave", line2: "Los Angeles, CA" },
  },
  {
    fullName: "robert wilson",
    email: "robert@gmail.com",
    password: "User@1234",
    phone: "7654321098",
    gender: "Male",
    date_of_birth: "1988-03-10",
    address: { line1: "789 Pine Rd", line2: "Chicago, IL" },
  },
  {
    fullName: "michael brown",
    email: "michael@gmail.com",
    password: "User@1234",
    phone: "6543210987",
    gender: "Male",
    date_of_birth: "1995-12-05",
    address: { line1: "321 Elm St", line2: "Houston, TX" },
  },
  {
    fullName: "sophia davis",
    email: "sophia@gmail.com",
    password: "User@1234",
    phone: "5432109876",
    gender: "Female",
    date_of_birth: "1993-07-18",
    address: { line1: "654 Maple Dr", line2: "Phoenix, AZ" },
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    console.log("\n🧹 Clearing existing seed data...");
    await DoctorModel.deleteMany({ email: { $in: doctorsData.map((d) => d.email) } });
    await UserModel.deleteMany({ email: { $in: usersData.map((u) => u.email) } });
    await AppointmentModel.deleteMany({});

    console.log("✅ Cleared old data\n");

    // Create doctors
    console.log("👨‍⚕️ Creating sample doctors...");
    const createdDoctors = await DoctorModel.create(
      doctorsData.map((doc) => ({
        ...doc,
        date: Date.now(),
      }))
    );
    console.log(`✅ Created ${createdDoctors.length} doctors\n`);

    // Create users
    console.log("👥 Creating sample users...");
    const createdUsers = await UserModel.create(usersData);
    console.log(`✅ Created ${createdUsers.length} users\n`);

    // Create sample appointments
    console.log("📅 Creating sample appointments...");
    const appointments = [
      {
        userId: createdUsers[0]._id.toString(),
        doctorId: createdDoctors[0]._id.toString(),
        slotDate: new Date(Date.now() + 86400000).toISOString().split("T")[0], // Tomorrow
        slotTime: "10:00 AM",
        userData: {
          fullName: createdUsers[0].fullName,
          email: createdUsers[0].email,
          phone: createdUsers[0].phone,
        },
        doctorData: {
          fullName: createdDoctors[0].fullName,
          speciality: createdDoctors[0].speciality,
          fees: createdDoctors[0].fees,
        },
        amount: createdDoctors[0].fees,
        date: Date.now(),
        cancelled: false,
        payment: true,
        isComplete: false,
      },
      {
        userId: createdUsers[1]._id.toString(),
        doctorId: createdDoctors[1]._id.toString(),
        slotDate: new Date(Date.now() + 172800000).toISOString().split("T")[0], // Day after tomorrow
        slotTime: "2:00 PM",
        userData: {
          fullName: createdUsers[1].fullName,
          email: createdUsers[1].email,
          phone: createdUsers[1].phone,
        },
        doctorData: {
          fullName: createdDoctors[1].fullName,
          speciality: createdDoctors[1].speciality,
          fees: createdDoctors[1].fees,
        },
        amount: createdDoctors[1].fees,
        date: Date.now(),
        cancelled: false,
        payment: true,
        isComplete: false,
      },
      {
        userId: createdUsers[2]._id.toString(),
        doctorId: createdDoctors[2]._id.toString(),
        slotDate: new Date(Date.now() + 259200000).toISOString().split("T")[0], // 3 days from now
        slotTime: "11:00 AM",
        userData: {
          fullName: createdUsers[2].fullName,
          email: createdUsers[2].email,
          phone: createdUsers[2].phone,
        },
        doctorData: {
          fullName: createdDoctors[2].fullName,
          speciality: createdDoctors[2].speciality,
          fees: createdDoctors[2].fees,
        },
        amount: createdDoctors[2].fees,
        date: Date.now(),
        cancelled: false,
        payment: false,
        isComplete: false,
      },
      {
        userId: createdUsers[3]._id.toString(),
        doctorId: createdDoctors[3]._id.toString(),
        slotDate: new Date(Date.now() + 345600000).toISOString().split("T")[0], // 4 days from now
        slotTime: "3:30 PM",
        userData: {
          fullName: createdUsers[3].fullName,
          email: createdUsers[3].email,
          phone: createdUsers[3].phone,
        },
        doctorData: {
          fullName: createdDoctors[3].fullName,
          speciality: createdDoctors[3].speciality,
          fees: createdDoctors[3].fees,
        },
        amount: createdDoctors[3].fees,
        date: Date.now(),
        cancelled: false,
        payment: true,
        isComplete: false,
      },
    ];

    await AppointmentModel.create(appointments);
    console.log(`✅ Created ${appointments.length} appointments\n`);

    console.log("🎉 Database seeding completed successfully!\n");
    console.log("📊 Summary:");
    console.log(`   - Doctors: ${createdDoctors.length}`);
    console.log(`   - Users: ${createdUsers.length}`);
    console.log(`   - Appointments: ${appointments.length}`);
    console.log("\n✨ All sample data has been added to your database!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error.message);
    process.exit(1);
  }
};

// Run the seeding function
seedDatabase();
