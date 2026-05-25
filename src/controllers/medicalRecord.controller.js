const medicalRecordService =
  require("../services/medicalRecord.service");
  const path = require("path");

const pdfGenerator =
  require("../utils/pdfGenerator");

exports.createMedicalRecord = async (
  req,
  res
) => {
  try {
    const result =
      await medicalRecordService.createMedicalRecord(
        {
          ...req.body,
          doctor_id: req.user.id,
        }
      );

    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


exports.getPatientRecords = async (
  req,
  res
) => {
  try {
    const records =
      await medicalRecordService.getPatientRecords(
        req.user.id
      );

    res.json({
      success: true,
      data: records,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


exports.getDoctorRecords = async (
  req,
  res
) => {
  try {
    const records =
      await medicalRecordService.getDoctorRecords(
        req.user.id
      );

    res.json({
      success: true,
      data: records,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



exports.generatePrescription =
  async (req, res) => {
    try {
      const record =
        await medicalRecordService.getRecordById(
          req.params.id
        );

      const filePath = path.join(
        __dirname,
        `../../src/uploads/prescription_${record.id}.pdf`
      );

      pdfGenerator.generatePrescriptionPDF(
        record,
        filePath
      );

      res.download(filePath);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };