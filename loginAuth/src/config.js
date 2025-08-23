const mongoose = require("mongoose");
mongoose.connect(
  "your Db Link"
)
.then(() => console.log("Database connected successfully"))
.catch(err => console.error("Database connection error:", err));


const LoginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, 
  },
  password: {
    type: String,
    required: true,
  },
});


const UserCollection = mongoose.model("users", LoginSchema);

module.exports = UserCollection;


