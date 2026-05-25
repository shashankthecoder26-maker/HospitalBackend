const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authRepository = require("../repositories/auth.repository");
exports.generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

exports.register = async (data) => {
  const existingUser =
    await authRepository.findUserByEmail(data.email);

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(
    data.password,
    10
  );

  const user = await authRepository.createUser({
    ...data,
    password: hashedPassword,
  });

  return user;
};