const Appointment = require("../models/Appointment");

// CREATE an appointment
const createAppointment = async (req, res) => {
  try {
    const { userId, date, time, description } = req.body;

    const appointment = new Appointment({
      user: userId,
      date,
      time,
      description,
    });

    await appointment.save();
    res.status(201).json({ message: "Appointment created", appointment });
  } catch (error) {
    res.status(500).json({ message: "Error creating appointment", error });
  }
};

// GET all appointments
const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate(
      "user",
      "name email"
    );
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching appointments", error });
  }
};

// GET single appointment by ID
const getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ message: "Error fetching appointment", error });
  }
};

// UPDATE an appointment
const updateAppointment = async (req, res) => {
  try {
    const updates = req.body;
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      updates,
      {
        new: true,
        runValidators: true,
      }
    ).populate("user", "name email");

    if (!appointment) {
      return res
        .status(404)
        .json({ message: "Appointment not found for update" });
    }

    res.status(200).json({ message: "Appointment updated", appointment });
  } catch (error) {
    res.status(500).json({ message: "Error updating appointment", error });
  }
};

// DELETE an appointment
const deleteAppointment = async (req, res) => {
  try {
    const deleted = await Appointment.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res
        .status(404)
        .json({ message: "Appointment not found for deletion" });
    }

    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting appointment", error });
  }
};

module.exports = {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
};
