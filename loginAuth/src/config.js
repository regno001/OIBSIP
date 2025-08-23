const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://testuser:test1234@cofo.tj6nadm.mongodb.net/imagify?retryWrites=true&w=majority"
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

