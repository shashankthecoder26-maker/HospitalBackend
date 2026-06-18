const pool = require("../config/db");

const getDoctorById = async (doctorId) => {

  const result = await pool.query(
    `
    SELECT
      d.id,
      d.start_time,
      d.end_time,
      d.slot_duration
    FROM doctors d
    WHERE d.id = $1
    `,
    [doctorId]
  );

  return result.rows[0];
};

module.exports = {
  getDoctorById
};