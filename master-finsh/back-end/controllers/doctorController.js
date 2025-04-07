// const Doctor = require("../models/Doctor");

// exports.getPendingDoctors = async (req, res) => {
//   try {
//     const doctors = await Doctor.find({ status: "pending" });
//     res.json(doctors);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.approveDoctor = async (req, res) => {
//   try {
//     const doctor = await Doctor.findByIdAndUpdate(
//       req.params.id,
//       { status: "approved" },
//       { new: true }
//     );
//     res.json(doctor);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.rejectDoctor = async (req, res) => {
//   try {
//     const doctor = await Doctor.findByIdAndUpdate(
//       req.params.id,
//       { status: "rejected" },
//       { new: true }
//     );
//     res.json(doctor);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// controllers/doctorController.js
const Doctor = require("../models/Doctor");

exports.getPendingDoctors = async (req, res) => {
  try {
    const pendingDoctors = await Doctor.find({ status: "pending" });
    res.status(200).json(pendingDoctors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching pending doctors.", error: error.message });
  }
};

exports.approveDoctor = async (req, res) => {
  const { id } = req.params;

  try {
    const doctor = await Doctor.findByIdAndUpdate(id, { status: "approved" }, { new: true });
    if (!doctor) return res.status(404).json({ message: "Doctor not found." });
    res.status(200).json({ message: "Doctor approved successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error approving doctor.", error: error.message });
  }
};

exports.rejectDoctor = async (req, res) => {
  const { id } = req.params;

  try {
    const doctor = await Doctor.findByIdAndUpdate(id, { status: "rejected" }, { new: true });
    if (!doctor) return res.status(404).json({ message: "Doctor not found." });
    res.status(200).json({ message: "Doctor rejected successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error rejecting doctor.", error: error.message });
  }
};