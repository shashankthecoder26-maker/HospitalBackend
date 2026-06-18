const express = require("express");

const router = express.Router();

const appointmentController = require("../controllers/appointment.controller");

const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");
const validate = require("../middleware/validate.middleware");
const { bookAppointmentSchema } = require("../validators/appoinment.validator");
router.post(
  "/book",
  authMiddleware,
  roleMiddleware("patient"),
  validate(bookAppointmentSchema),
  appointmentController.bookAppointment
);

router.get(
  "/doctor",
  authMiddleware,
  roleMiddleware("doctor"),
  appointmentController.getDoctorAppointments
);

router.patch(
  "/:id/status",
  authMiddleware,
  roleMiddleware("doctor"),
  appointmentController.updateAppointmentStatus
);
router.get(
  "/doctor/:doctorId/slots",
  appointmentController.getAvailableSlots
);
module.exports = router;