const express = require("express");
const router = express.Router();
const { loginUser } = require("../controllers/userController");

const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  registerUser, // 👈 import new controller
} = require("../controllers/userController");

// 👇 ADD THIS ROUTE at the top (before routes with `:id`)
router.post("/register", registerUser); // POST /api/users/register
router.post("/login", loginUser);

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
