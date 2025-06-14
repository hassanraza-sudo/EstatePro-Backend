const express = require("express");
const router = express.Router();
const {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} = require("../controllers/appointmentController");

// POST /api/appointments — create new appointment
router.post("/", createAppointment);

// GET /api/appointments — get all appointments
router.get("/", getAllAppointments);

// GET /api/appointments/:id — get single appointment by ID
router.get("/:id", getAppointmentById);

// PUT /api/appointments/:id — update appointment by ID
router.put("/:id", updateAppointment);

// DELETE /api/appointments/:id — delete appointment by ID
router.delete("/:id", deleteAppointment);

module.exports = router;
