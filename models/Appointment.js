const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    property: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    date: Date,
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
