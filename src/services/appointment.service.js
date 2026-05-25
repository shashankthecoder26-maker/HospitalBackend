const appointmentRepository = require("../repositories/appointment.repository");

exports.bookAppointment = async (data) => {
  // validate slot
  // check doctor availability
  // prevent duplicate booking

  const existingAppointment =
    await appointmentRepository.findExistingAppointment(
      data.doctor_id,
      data.appointment_date,
      data.appointment_time
    );

  if (existingAppointment) {
    throw new Error(
      "Doctor already booked for this slot"
    );
  }
  const appointment =
    await appointmentRepository.createAppointment(data);

  return appointment;
};


exports.getDoctorAppointments = async (
  doctor_id
) => {
  return await appointmentRepository.getDoctorAppointments(
    doctor_id
  );
};

exports.updateAppointmentStatus = async (
  appointment_id,
  status
) => {
  const allowedStatuses = [
    "approved",
    "rejected",
    "completed",
  ];

  if (!allowedStatuses.includes(status)) {
    throw new Error("Invalid status");
  }

  return await appointmentRepository.updateAppointmentStatus(
    appointment_id,
    status
  );
};