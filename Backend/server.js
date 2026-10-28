const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const Contact = require("./models/Contact");

// Contact API
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({
      message: "Please fill all required fields",
    });
  }

  try {
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    const savedContact = await newContact.save();

    return res.status(201).json({
      message: "Message sent successfully",
      data: savedContact,
    });
  } catch (err) {
    console.error("Contact save error:", err.message);

    return res.status(500).json({
      message: "Unable to save your message right now.",
    });
  }
});

// Start server after MongoDB connects
const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing from your .env file");
    }

    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
}

startServer();