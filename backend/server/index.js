// import express from "express";
// import * as cors from "cors";
// import mongoose from "mongoose";
// // const dotenv = require("dotenv");
// import * as dotenv from "dotenv";
// // const Item = require("../models/Item.js");

// // import Item from "../models/Item.js";

// // const express = require("express");
// // const cors = require("cors");
// // const bodyParser = require("body-parser");
// // const router = require("../routes/router");
// // const mongoose = require("mongoose");
// // require("dotenv/config");
// // dotenv.config();

// // const router = express.Router();

// // const PORT = process.env.PORT || 3005;

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.options("*", cors());
// // app.use(bodyParser.urlencoded({ extended: false }));

// // const corsOptions = {
// //   origin: "*",
// //   Credential: true,
// //   optionSuccessStatus: 200,
// // };

// // const itemSchema = new mongoose.Schema({
// //   name: String,
// //   email: String,
// //   message: String,
// //   phone: String,
// // });
// // const Item = mongoose.model("Item", itemSchema);

// // app.use("/", router);

// // router.get("/items", async (req, res) => {
// //   try {
// //     const items = await Item.find();
// //     res.json(items);
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // });

// // Create a new item
// // router.post("/items", async (req, res) => {
// //   const item = new Item({
// //     name: req.body.name,
// //     email: req.body.email,
// //     phone: req.body.phone,
// //     message: req.body.message,
// //   });

// //   try {
// //     const newItem = await item.save();
// //     res.status(201).json(newItem);
// //   } catch (error) {
// //     res.status(400).json({ message: error.message });
// //   }
// // });
// // app.listen(3001);
// // const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };
// // mongoose
// //   .connect(process.env.DB_URI, dbOptions)
// //   .then(() => console.log("DB Connected!"))
// //   .catch((err) => console.log(err));

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("../models/Item");

const dotenv = require("dotenv");
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
