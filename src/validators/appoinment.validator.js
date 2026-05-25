const Joi = require("joi");

exports.bookAppointmentSchema = Joi.object({
  patient_id: Joi.number().required(),
  doctor_id: Joi.number().required(),
  appointment_date: Joi.date().required(),
  appointment_time: Joi.string().required(),
});