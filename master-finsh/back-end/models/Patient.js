const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  patientId: { type: String, unique: true }, // من الجزء الأول
  name: { type: String, required: true }, // من الجزء الثالث
  name: { type: String }, // من الجزء الأول (اختياري لو بدك تميز بينه وبين fullName)
  email: { type: String, unique: true }, // من الجزء الثالث
  password: { type: String }, // من الجزء الثالث
  age: { type: Number }, // من الجزء الأول
  gender: { type: String, enum: ["Male", "Female"] }, // من الجزء الأول
  phone: { type: String, required: true }, // من الجزء الأول والثالث
  address: { type: String }, // من الجزء الثالث
  bloodType: { type: String }, // من الجزء الأول
  allergies: { type: String }, // من الجزء الأول
  chronicDiseases: { type: String }, // من الجزء الأول
  symptoms: { type: String }, // من الجزء الأول
  diagnosis: { type: String }, // من الجزء الأول
  treatment: { type: String }, // من الجزء الأول
  medicalHistory: [
    {
      condition: String,
      medications: [String],
      allergies: [String],
      notes: String,
    },
  ], // من الجزء الثالث
  qrCode: { type: String }, // من الجزء الثالث
  createdAt: { type: Date, default: Date.now }, // من الجزء الأول
});

module.exports = mongoose.model("Patient", patientSchema);
