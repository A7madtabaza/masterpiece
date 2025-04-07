// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const Patient = require("../models/Patient");
// const Doctor = require("../models/Doctor");
// const Admin = require("../models/Admin");

// const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// const generateToken = (userId, userType) => {
//   return jwt.sign({ userId, userType }, JWT_SECRET, { expiresIn: "1d" });
// };

// exports.register = async (req, res) => {
//   const {
//     fullName,
//     email,
//     password,
//     phone,
//     address,
//     jobNumber,
//     specialization,
//     userType,
//   } = req.body;

//   try {
//     let user;
//     if (userType === "user") user = await Patient.findOne({ email });
//     if (userType === "doctor") user = await Doctor.findOne({ email });
//     if (userType === "admin") user = await Admin.findOne({ email });

//     if (user) return res.status(400).json({ message: "Email already exists." });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     if (userType === "user") {
//       user = new Patient({
//         fullName,
//         email,
//         password: hashedPassword,
//         phone,
//         address,
//       });
//     } else if (userType === "doctor") {
//       user = new Doctor({
//         fullName,
//         email,
//         password: hashedPassword,
//         phone,
//         jobNumber,
//         specialization,
//       });
//     } else if (userType === "admin") {
//       user = new Admin({
//         fullName,
//         email,
//         password: hashedPassword,
//         phone,
//       });
//     } else {
//       return res.status(400).json({ message: "Invalid user type." });
//     }

//     await user.save();
//     res.status(201).json({ message: `${userType} registered successfully.` });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.login = async (req, res) => {
//   const { email, password, userType } = req.body;

//   try {
//     let user;
//     if (userType === "user") user = await Patient.findOne({ email });
//     if (userType === "doctor") user = await Doctor.findOne({ email });
//     if (userType === "admin") user = await Admin.findOne({ email });

//     if (!user) return res.status(400).json({ message: "User not found." });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(400).json({ message: "Invalid credentials." });

//     const token = generateToken(user._id, userType);

//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: false,
//       sameSite: "lax",
//       maxAge: 24 * 60 * 60 * 1000,
//     });

//     res.json({ message: "Logged in successfully.", token });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// controllers/authController.js
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const Patient = require("../models/Patient");
// const Doctor = require("../models/Doctor");
// const Admin = require("../models/Admin");

// const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// const generateToken = (userId, userType) => {
//   return jwt.sign({ userId, userType }, JWT_SECRET, { expiresIn: "1d" });
// };

// exports.register = async (req, res) => {
//   const {
//     fullName,
//     email,
//     password,
//     phone,
//     address,
//     jobNumber,
//     specialization,
//     userType,
//   } = req.body;

//   try {
//     let user;
//     if (userType === "user") user = await Patient.findOne({ email });
//     if (userType === "doctor") user = await Doctor.findOne({ email });
//     if (userType === "admin") user = await Admin.findOne({ email });

//     if (user) return res.status(400).json({ message: "Email already exists." });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     if (userType === "user") {
//       user = new Patient({
//         fullName,
//         email,
//         password: hashedPassword,
//         phone,
//         address,
//       });
//     } else if (userType === "doctor") {
//       user = new Doctor({
//         fullName,
//         email,
//         password: hashedPassword,
//         phone,
//         jobNumber,
//         specialization,
//         status: "pending", // حالة الطبيب معلقة افتراضيًا
//       });
//     } else if (userType === "admin") {
//       user = new Admin({
//         fullName,
//         email,
//         password: hashedPassword,
//         phone,
//       });
//     } else {
//       return res.status(400).json({ message: "Invalid user type." });
//     }

//     await user.save();

//     if (userType === "doctor") {
//       res.status(201).json({ message: "Doctor registration request sent. Awaiting admin approval." });
//     } else {
//       res.status(201).json({ message: `${userType} registered successfully.` });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Patient = require("../models/Patient");
const Doctor = require("../models/Doctor");
const Admin = require("../models/Admin");

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

const generateToken = (userId, userType) => {
  return jwt.sign({ userId, userType }, JWT_SECRET, { expiresIn: "1d" });
};

exports.register = async (req, res) => {
  const {
    fullName,
    email,
    password,
    phone,
    address,
    jobNumber,
    specialization,
    userType,
  } = req.body;

  try {
    let user;
    if (userType === "user") user = await Patient.findOne({ email });
    if (userType === "doctor") user = await Doctor.findOne({ email });
    if (userType === "admin") user = await Admin.findOne({ email });

    if (user) return res.status(400).json({ message: "Email already exists." });

    const hashedPassword = await bcrypt.hash(password, 10);

    if (userType === "user") {
      user = new Patient({
        fullName,
        email,
        password: hashedPassword,
        phone,
        address,
      });
    } else if (userType === "doctor") {
      user = new Doctor({
        fullName,
        email,
        password: hashedPassword,
        phone,
        jobNumber,
        specialization,
        status: "pending",
      });
    } else if (userType === "admin") {
      user = new Admin({ fullName, email, password: hashedPassword, phone });
    } else {
      return res.status(400).json({ message: "Invalid user type." });
    }

    await user.save();

    if (userType === "doctor") {
      res
        .status(201)
        .json({
          message: "Doctor registration request sent. Awaiting admin approval.",
        });
    } else {
      res.status(201).json({ message: `${userType} registered successfully.` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// exports.login = async (req, res) => {

//   const { email, password, userType } = req.body;

//   try {
//     let user;
//     if (userType === "user") user = await Patient.findOne({ email });
//     if (userType === "doctor") user = await Doctor.findOne({ email });
//     if (userType === "admin") user = await Admin.findOne({ email });

//     if (!user) return res.status(400).json({ message: "User not found." });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(400).json({ message: "Invalid credentials." });

//     if (userType === "doctor" && user.status !== "approved") {
//       return res.status(403).json({
//         message: "Your account is pending approval or has been rejected.",
//         status: user.status,
//       });
//     }

//     const token = generateToken(user._id, userType);

//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "lax",
//       maxAge: 24 * 60 * 60 * 1000,
//     });

//     res.json({ message: "Logged in successfully.", token });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// controllers/authController.js
exports.login = async (req, res) => {
  const { email, password, userType } = req.body;

  try {
    let user;
    if (userType === "user") user = await Patient.findOne({ email });
    if (userType === "doctor") user = await Doctor.findOne({ email });
    if (userType === "admin") user = await Admin.findOne({ email });

    if (!user) return res.status(400).json({ message: "User not found." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials." });

    if (userType === "doctor" && user.status !== "approved") {
      return res.status(403).json({
        message: "Your account is pending approval or has been rejected.",
        status: user.status, // بيرجع الـ status الحالي
      });
    }

    const token = generateToken(user._id, userType);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    // بيرجع الـ status مع الـ response الناجح
    res.json({
      message: "Logged in successfully.",
      token,
      status: user.status || "approved", // التأكد من إرجاع الـ status
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: error.message });
  }
};