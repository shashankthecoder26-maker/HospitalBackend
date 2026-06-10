// routes/departmentRoutes.js

const express = require("express");

const {
  getDepartments,
  getDoctorsByDepartment,
} = require("../controllers/departmentController");

const router = express.Router();

router.get("/", getDepartments);

router.get(
  "/:departmentId/doctors",
  getDoctorsByDepartment
);

module.exports = router;