const pool = require("../config/db");

exports.createAppointment = async (data) => {
  const { patient_id, doctor_id, appointment_date } = data;

  const query = `
    INSERT INTO appointments
    (patient_id, doctor_id, appointment_date)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

  const values = [
    patient_id,
    doctor_id,
    appointment_date,
  ];

  const result = await pool.query(query, values);

  return result.rows[0];
};