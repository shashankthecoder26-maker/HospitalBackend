const pool = require("../config/db");

exports.createAppointment = async (data) => {
  const users = await pool.query(
    "SELECT id, name, role FROM users"
  );

  console.log("USERS TABLE:", users.rows);

  const {
    patient_id,
    doctor_id,
    appointment_date,
    appointment_time
  } = data;

  const query = `
    INSERT INTO appointments
    (patient_id, doctor_id, appointment_date, appointment_time)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;

  const values = [
    patient_id,
    doctor_id,
    appointment_date,
    appointment_time
  ];

  const result = await pool.query(query, values);

  return result.rows[0];
};

exports.findExistingAppointment = async (
  doctor_id,
  appointment_date,
  appointment_time
) => {
  const result = await pool.query(
    `
    SELECT * FROM appointments
    WHERE doctor_id = $1
    AND appointment_date = $2
    AND appointment_time = $3
    `,
    [doctor_id, appointment_date, appointment_time]
  );

  return result.rows[0];
};

exports.getDoctorAppointments = async (doctor_id) => {
  const result = await pool.query(
    `
    SELECT * FROM appointments
    WHERE doctor_id = $1
    ORDER BY appointment_date ASC
    `,
    [doctor_id]
  );

  return result.rows;
};

exports.updateAppointmentStatus = async (
  appointment_id,
  status
) => {
  const result = await pool.query(
    `
    UPDATE appointments
    SET status = $1
    WHERE id = $2
    RETURNING *;
    `,
    [status, appointment_id]
  );

  return result.rows[0];
};