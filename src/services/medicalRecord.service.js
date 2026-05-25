const medicalRecordRepository =
  require("../repositories/medicalRecord.repository");

exports.createMedicalRecord = async (
  data
) => {
  return await medicalRecordRepository.createMedicalRecord(
    data
  );
};

exports.getPatientRecords = async (
  patient_id
) => {
  return await medicalRecordRepository.getPatientRecords(
    patient_id
  );
};

exports.getDoctorRecords = async (
  doctor_id
) => {
  return await medicalRecordRepository.getDoctorRecords(
    doctor_id
  );
};

exports.getRecordById = async (id) => {
  return await medicalRecordRepository.getRecordById(
    id
  );
};