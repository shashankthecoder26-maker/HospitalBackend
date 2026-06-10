

const pool = require("../config/db");

const getAllDepartments = async () => {
  const result = await pool.query(
    `SELECT id, name
     FROM departments
     ORDER BY name`
  );

  return result.rows;
};


const getDoctorsByDepartment = async (departmentId) => {
  const result = await pool.query(
    `
    SELECT
      u.id,
      u.name,
      u.email,
      d.specialization,
      d.consultation_fee
    FROM doctors d
    JOIN users u
      ON d.user_id = u.id
    WHERE d.department_id = $1
    `,
    [departmentId]
  );

  return result.rows;
};
module.exports = {
  getAllDepartments,
  getDoctorsByDepartment,
};