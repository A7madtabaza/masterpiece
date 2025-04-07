// const express = require("express");
// const router = express.Router();
// const doctorController = require("../controllers/doctorController");

// router.get("/pending", doctorController.getPendingDoctors);
// router.put("/approve/:id", doctorController.approveDoctor);
// router.put("/reject/:id", doctorController.rejectDoctor);

// module.exports = router;
// routes/doctorRoutes.js
const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

router.get("/pending", doctorController.getPendingDoctors);
router.post("/approve/:id", doctorController.approveDoctor); // غيرتها من put إلى post
router.post("/reject/:id", doctorController.rejectDoctor); // غيرتها من put إلى post

module.exports = router;