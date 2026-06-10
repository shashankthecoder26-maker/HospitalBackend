const patientService = require("../services/patientService");

const getPatientById = async (req, res) => {
  try {
    const patient = await patientService.getPatientById(
      req.params.id
    );

    res.json({ data: patient });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getPatientById,
};