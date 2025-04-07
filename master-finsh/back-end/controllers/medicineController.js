const Medicine = require("../models/Medicine");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

exports.uploadMedicineImage = upload.single("image");

exports.addMedicine = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";
    const medicine = new Medicine({ name, description, price, image });
    await medicine.save();
    res.status(201).json(medicine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
