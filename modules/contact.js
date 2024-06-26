const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  id: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  favoriteColor: { type: String },
  birthday: { type: String },
});

module.exports = mongoose.model("contact", contactSchema);
