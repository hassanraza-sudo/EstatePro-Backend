const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  title: String,
  address: String,
  city: String,
  type: String, // house, apartment, etc.
  price: Number,
  description: String,
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Property", propertySchema);
