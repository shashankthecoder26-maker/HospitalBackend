const patientRepository = require("../repositories/patientRepository");

const getPatientById = async (patientId) => {
  return await patientRepository.getPatientByUserId(patientId);
};

module.exports = {
  getPatientById,
};