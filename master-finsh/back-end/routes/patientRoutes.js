const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");

router.post("/add", patientController.addPatient);
router.get("/", patientController.getAllPatients);
router.get("/:id", patientController.getPatientById);
router.put("/:id", patientController.updatePatient);
router.delete("/:id", patientController.deletePatient);
router.get("/search", patientController.searchPatients);
router.post("/ai/diagnosis", patientController.generateAIDiagnosis);
router.post("/ai/treatment", patientController.generateAITreatment);
router.post("/qr", patientController.generateQRCode);

module.exports = router;
