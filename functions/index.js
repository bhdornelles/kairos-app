const nodemailer = require("nodemailer");
const cors = require("cors")({origin: true});

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "riosulrenovation@gmail.com",
    pass: "tpmp kasy kkeh lors",
  },
});


exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const formData = req.body;

    const mailOptions = {
      from: "riosulrenovation@gmail.com",
      to: "kairosimprovement@gmail.com",
      subject: "New Quote Request",
      text: `
        First Name: ${formData.firstName}
        Last Name: ${formData.lastName}
        Phone: ${formData.phone}
        Selected Service: ${formData.selectedService}
        Message: ${formData.message}
      `,
    };

    transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.status(500).json({message: "Error sending email"});
      }

      res.set("Access-Control-Allow-Origin", "*");
      return res.status(200).json({message: "Email sent sucessfully"});
    });
  });
});
