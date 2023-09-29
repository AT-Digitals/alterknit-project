const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("../models/Item");
const Service = require("../models/Service");
const ServiceDetails = require("../models/ServiceItem");
const MoreDetails = require("../models/MoreDetails");

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

app.post("/items", async (req, resp) => {
  try {
    const user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      resp.send(req.body);
      console.log(result);
    } else {
      console.log("Contact details already saved");
    }
  } catch (e) {
    resp.send("Something Went Wrong");
  }
});

app.get("/service-details", async (req, res) => {
  try {
    const data = await ServiceDetails.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/service-details", async (req, resp) => {
  try {
    const user = new ServiceDetails(req.body);
    let result = await user.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      resp.send(req.body);
      console.log(result);
    } else {
      console.log("service details saved successfully");
    }
  } catch (e) {
    resp.send("Something Went Wrong");
  }
});

app.post("/more-details", async (req, resp) => {
  try {
    const user = new MoreDetails(req.body);
    let result = await user.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      resp.send(req.body);
      console.log(result);
    } else {
      console.log("service details saved successfully");
    }
  } catch (e) {
    resp.send("Something Went Wrong");
  }
});

app.post("/service-item", async (req, res) => {
  try {
    const user = new Service({ strings: req.body.strings });
    await user.save();
    res.status(201).json({ message: "Strings stored successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  //   result = result.toObject();
  //   if (result) {
  //     delete result.password;
  //     resp.send(req.body);
  //     console.log(result);
  //   } else {
  //     console.log("selected items was saved");
  //   }
  // } catch (e) {
  //   resp.send("Something Went Wrong");
  // }
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
