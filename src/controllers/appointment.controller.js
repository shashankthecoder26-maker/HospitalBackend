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


exports.getDoctorAppointments = async (
  req,
  res
) => {
  
  try {
    const appointments =
      await appointmentService.getDoctorAppointments(
        req.user.id
      );

    res.json({
      success: true,
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateAppointmentStatus = async (
  req,
  res
) => {
  try {
    const result =
      await appointmentService.updateAppointmentStatus(
        req.params.id,
        req.body.status
      );

    res.json({
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