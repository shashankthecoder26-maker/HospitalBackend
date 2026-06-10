
const departmentRepository = require("../repositories/departmentRepositories");

const getDepartments = async () => {
  return await departmentRepository.getAllDepartments();
};

const getDoctors = async (departmentId) => {
  return await departmentRepository.getDoctorsByDepartment(
    departmentId
  );
};
module.exports = {
  getDepartments,
  getDoctors,
};