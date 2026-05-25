const pool = require("../config/db");

exports.findUserByEmail = async (email) => {
  const result = await pool.query(
    "SELECT * FROM users WHERE email=$1",
    [email]
  );

  return result.rows[0];
};

exports.createUser = async (data) => {
  const { name, email, password, role } = data;

  const result = await pool.query(
    `
      INSERT INTO users
      (name, email, password, role)
      VALUES ($1, $2, $3, $4)
      RETURNING id, name, email, role
    `,
    [name, email, password, role]
  );

  return result.rows[0];
};