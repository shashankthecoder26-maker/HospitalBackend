const pool = require("../config/db");

const getPatientByUserId = async (userId) => {
  const result = await pool.query(
    "SELECT * FROM patients WHERE user_id = $1",
    [userId]
  );

  return result.rows[0];
};

module.exports = {
  getPatientByUserId,
};