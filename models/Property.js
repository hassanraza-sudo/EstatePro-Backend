const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    location: String,
    images: [String],
    listedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: {
      type: String,
      enum: ["available", "sold", "rented"],
      default: "available",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", propertySchema);
