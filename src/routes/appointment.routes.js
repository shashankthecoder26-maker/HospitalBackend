const express = require("express");

const router = express.Router();

const appointmentController = require("../controllers/appointment.controller");

const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");

router.post(
  "/book",
  authMiddleware,
  roleMiddleware(["patient"]),
  appointmentController.bookAppointment
);

module.exports = router;