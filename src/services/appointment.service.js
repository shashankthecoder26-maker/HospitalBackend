const appointmentRepository = require("../repositories/appointment.repository");

exports.bookAppointment = async (data) => {
  // validate slot
  // check doctor availability
  // prevent duplicate booking

  const appointment =
    await appointmentRepository.createAppointment(data);

  return appointment;
};