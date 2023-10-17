const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("../models/Item");
const Service = require("../models/Service");
const ServiceDetails = require("../models/ServiceItem");
const MoreDetails = require("../models/MoreDetails");
const ServiceData = require("../models/ServiceDetails");

const dotenv = require("dotenv");
const ServiceItem = require("../models/Service");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(process.env.DB_URI, dbOptions)
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(err));

app.post("/service-data", async (req, res) => {
  try {
    let Service = req.body;
    const document = new ServiceData(Service);
    await document.save(); // Assuming the request body contains the updated schema
    res.json({ message: "Schema updated successfully", data: Service });
    // res.json({ message: "Schema updated successfully", data: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "", // your email
      pass: "", // your email password
    },
  });

  const mailOptions = {
    from: { email }, // sender email address
    to: "thenmozhivij@gmail.com", // recipient email address
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
