require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const connectDB = require("./config/db");

// استيراد المسارات
const patientRoutes = require("./routes/patientRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const medicineRoutes = require("./routes/medicineRoutes");
const articleRoutes = require("./routes/articleRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// الاتصال بقاعدة البيانات
connectDB();

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // دعم الفرونت اند
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // تقديم الصور

// API Routes
app.use("/api/patients", patientRoutes); // مسارات المرضى
app.use("/api/doctors", doctorRoutes); // مسارات الأطباء
app.use("/api/medicines", medicineRoutes); // مسارات الأدوية
app.use("/api/articles", articleRoutes); // مسارات المقالات
app.use("/api/auth", authRoutes); // مسارات التسجيل وتسجيل الدخول

// Root Route
app.get("/", (req, res) => res.send("Medical System API is running."));

// تشغيل الخادم
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
