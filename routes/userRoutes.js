const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// GET /api/users — get all users
router.get("/", getAllUsers);

// GET /api/users/:id — get a single user by ID
router.get("/:id", getUserById);

// PUT /api/users/:id — update user by ID
router.put("/:id", updateUser);

// DELETE /api/users/:id — delete user by ID
router.delete("/:id", deleteUser);

module.exports = router;
