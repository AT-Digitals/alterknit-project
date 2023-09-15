import express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import mongoose from "mongoose";
// const dotenv = require("dotenv");
import * as dotenv from "dotenv";
// const Item = require("../models/Item.js");

// import Item from "../models/Item.js";

// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const router = require("../routes/router");
// const mongoose = require("mongoose");
// require("dotenv/config");
dotenv.config();

const router = express.Router();

const PORT = process.env.PORT || 3005;

const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  Credential: true,
  optionSuccessStatus: 200,
};

const itemSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  phone: String,
});
const Item = mongoose.model("Item", itemSchema);

// app.use(cors(corsOptions));
// app.use("/", router);

router.get("/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new item
router.post("/items", async (req, res) => {
  const item = new Item({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(process.env.DB_URI, dbOptions)
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
