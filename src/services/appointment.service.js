const appointmentRepository = require("../repositories/appointment.repository");
const doctorRepository = require("../repositories/doctorRepository");
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


exports.getAvailableSlots = async (
  doctorId,
  date
) => {

  const doctor =
    await doctorRepository.getDoctorById(
      doctorId
    );

  const bookedSlots =
    await appointmentRepository.findBookedSlots(
      doctorId,
      date
    );

  const bookedTimes = bookedSlots.map(
    slot => slot.appointment_time
  );

  let slots = [];

  let current = new Date(
    `1970-01-01T${doctor.start_time}`
  );

  const end = new Date(
    `1970-01-01T${doctor.end_time}`
  );

  while (current < end) {

    const time = current
      .toTimeString()
      .slice(0, 8);

    if (!bookedTimes.includes(time)) {
      slots.push(time);
    }

    current.setMinutes(
      current.getMinutes() +
      doctor.slot_duration
    );
  }
slots.sort();
  return slots;
};