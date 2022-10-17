const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

/* This is the server. */
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

/* Creating a transport object. */
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "avsluttendeprosjekt@gmail.com",
      pass: "kdfvzipdadelboxa",
    },
  });
  //kdfv zipd adel boxa
/* Checking if the email is ready to send. */
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

/* This is the route that the client will use to send the data to the server. */
  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
 /* Creating a mail object. */
    const mail = {
      from: name,
      to: "avsluttendeprosjekt@gmail.com",
      subject: "Ny henvendelse fra kontaktskjema",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
/* Sending the mail object to the email address. */
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Melding sendt - Takk for henvendelsen" });
      }
    });
  })