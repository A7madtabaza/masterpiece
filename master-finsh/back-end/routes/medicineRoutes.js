const express = require("express");
const router = express.Router();
const medicineController = require("../controllers/medicineController");

router.post(
  "/add",
  medicineController.uploadMedicineImage,
  medicineController.addMedicine
);
router.get("/", medicineController.getMedicines);

module.exports = router;
