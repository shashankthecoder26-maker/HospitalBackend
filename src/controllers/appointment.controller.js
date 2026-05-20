const appointmentService = require("../services/appointment.service");

exports.bookAppointment = async (req, res) => {
  try {
    const result = await appointmentService.bookAppointment(req.body);

    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};