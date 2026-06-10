// controllers/departmentController.js

const departmentService = require("../services/departmentService");

const getDepartments = async (req, res) => {
  try {
    const departments = await departmentService.getDepartments();

    res.status(200).json({
      success: true,
      data: departments,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch departments",
    });
  }
};
const getDoctorsByDepartment = async (req, res) => {
  try {
    const { departmentId } = req.params;

    const doctors = await departmentService.getDoctors(
      departmentId
    );

    res.status(200).json({
      success: true,
      data: doctors,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch doctors",
    });
  }
};

module.exports = {
  getDepartments,
  getDoctorsByDepartment,
};