const express = require("express");

const router = express.Router();

const medicalRecordController =
  require("../controllers/medicalRecord.controller");

const authMiddleware =
  require("../middleware/auth.middleware");

const roleMiddleware =
  require("../middleware/role.middleware");

router.post(
  "/",
  authMiddleware,
  roleMiddleware("doctor"),
  medicalRecordController.createMedicalRecord
);

router.get(
  "/patient",
  authMiddleware,
  roleMiddleware("patient"),
  medicalRecordController.getPatientRecords
);

router.get(
  "/doctor",
  authMiddleware,
  roleMiddleware("doctor"),
  medicalRecordController.getDoctorRecords
);
router.get(
  "/:id/prescription",
  authMiddleware,
  medicalRecordController.generatePrescription
);

module.exports = router;