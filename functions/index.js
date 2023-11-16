// const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors")({origin: true});

// const app = express();
// const port = process.env.PORT || 8401;

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// Enable CORS
// app.use(cors({
//   origin: "https://kairoswebsite-21c64.web.app/",
//   methods: "POST",
// }));

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "riosulrenovation@gmail.com",
    pass: "tpmp kasy kkeh lors",
  },
});

// app.post("/send-email", (req, res) => {
//   const formData = req.body;

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const formData = req.body;

    const mailOptions = {
      from: "riosulrenovation@gmail.com",
      to: "bhdornelles10@icloud.com",
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

// Compose the email
// const mailOptions = {
//   from: "riosulrenovation@gmail.com",
//   to: "bhdornelles10@icloud.com",
//   subject: "New Quote Request",
//   text: `
//     First Name: ${formData.firstName}
//     Last Name: ${formData.lastName}
//     Phone: ${formData.phone}
//     Selected Service: ${formData.selectedService}
//     Message: ${formData.message}
//   `,
// };

// Send the email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       res.status(500).json({success: false, message: "Error sending email"});
//     } else {
//       console.log("Email sent: " + info.response);
//       res.json({success: true, message: "Email sent successfully"});
//     }
//   });
// });


// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
