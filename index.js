const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Replace with your MongoDB URL
const MONGO_URL = "mongodb://127.0.0.1:27017/mydatabase";

async function start() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ MongoDB connected");

    app.get("/", (req, res) => {
      res.send("Server running — MongoDB connected");
    });

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
  }
}

start();
