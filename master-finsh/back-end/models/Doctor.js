// const mongoose = require("mongoose");

// const doctorSchema = new mongoose.Schema({
//   fullName: { type: String, required: true }, // من الجزء الثالث
//   name: { type: String }, // من الجزء الثاني (اختياري)
//   email: { type: String, required: true, unique: true }, // من الجزء الثالث
//   password: { type: String, required: true }, // من الجزء الثالث
//   phone: { type: String, required: true }, // من الجزء الثالث
//   jobNumber: { type: String, required: true }, // من الجزء الثالث
//   specialization: { type: String, required: true }, // من الجزء الثالث
//   specialty: { type: String }, // من الجزء الثاني (اختياري لو بدك تميز)
//   status: {
//     type: String,
//     enum: ["pending", "approved", "rejected"],
//     default: "pending",
//   }, // من الجزء الثاني
//   patients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Patient" }], // من الجزء الثالث
//   createdAt: { type: Date, default: Date.now }, // من الجزء الثاني
// });

// module.exports = mongoose.model("Doctor", doctorSchema);
// models/Doctor.js
const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  jobNumber: { type: String, required: true },
  specialization: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  patients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Patient" }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Doctor", doctorSchema);