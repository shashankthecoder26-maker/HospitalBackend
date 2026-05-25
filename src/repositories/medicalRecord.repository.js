const pool = require("../config/db");

exports.createMedicalRecord = async (data) => {
  const {
    appointment_id,
    doctor_id,
    patient_id,
    diagnosis,
    prescription,
    notes,
  } = data;

  const result = await pool.query(
    `
    INSERT INTO medical_records
    (
      appointment_id,
      doctor_id,
      patient_id,
      diagnosis,
      prescription,
      notes
    )
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
    `,
    [
      appointment_id,
      doctor_id,
      patient_id,
      diagnosis,
      prescription,
      notes,
    ]
  );

  return result.rows[0];
};


exports.getPatientRecords = async (
  patient_id
) => {
  const result = await pool.query(
    `
    SELECT * FROM medical_records
    WHERE patient_id = $1
    ORDER BY created_at DESC
    `,
    [patient_id]
  );

  return result.rows;
};


exports.getDoctorRecords = async (
  doctor_id
) => {
  const result = await pool.query(
    `
    SELECT * FROM medical_records
    WHERE doctor_id = $1
    ORDER BY created_at DESC
    `,
    [doctor_id]
  );

  return result.rows;
};


exports.getRecordById = async (id) => {
  const result = await pool.query(
    `
    SELECT * FROM medical_records
    WHERE id = $1
    `,
    [id]
  );

  return result.rows[0];
};