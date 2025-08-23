// config.js
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "your db Link"
)
.then(() => console.log("Database connected successfully"))
.catch(err => console.error("Database connection error:", err));

// Create Schema
const LoginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // prevent duplicate usernames
  },
  password: {
    type: String,
    required: true,
  },
});

// Create collection
const UserCollection = mongoose.model("users", LoginSchema);

module.exports = UserCollection;
