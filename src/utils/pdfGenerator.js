const PDFDocument = require("pdfkit");
const fs = require("fs");

exports.generatePrescriptionPDF = (
  data,
  filePath
) => {
  const doc = new PDFDocument();

  doc.pipe(fs.createWriteStream(filePath));

  doc.fontSize(20).text(
    "Medical Prescription",
    {
      align: "center",
    }
  );

  doc.moveDown();

  doc.fontSize(14).text(
    `Patient ID: ${data.patient_id}`
  );

  doc.text(
    `Doctor ID: ${data.doctor_id}`
  );

  doc.text(
    `Diagnosis: ${data.diagnosis}`
  );

  doc.text(
    `Prescription: ${data.prescription}`
  );

  doc.text(`Notes: ${data.notes}`);

  doc.end();
};