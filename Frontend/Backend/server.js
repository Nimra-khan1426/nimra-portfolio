const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Mongoose v7+ connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const Contact = require("./models/Contact");

// REST API route
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ message: "Please fill all required fields" });
  }

  try {
    const newContact = new Contact({ firstName, lastName, email, phone, message });
    const savedContact = await newContact.save();
    res.status(201).json({ message: "Message sent successfully", data: savedContact });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));