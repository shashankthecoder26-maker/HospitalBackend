const Joi = require("joi");

exports.createMedicalRecordSchema =
  Joi.object({
    appointment_id: Joi.number().required(),

    patient_id: Joi.number().required(),

    diagnosis: Joi.string().required(),

    prescription: Joi.string().required(),

    notes: Joi.string().allow(""),
  });