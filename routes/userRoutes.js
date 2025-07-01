const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs"); // ✅ Import bcrypt
const User = require("../models/User"); // ✅ Import your User model

const { loginUser } = require("../controllers/userController");
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  registerUser,
} = require("../controllers/userController");

// Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

// ✅ Add your password change route
router.post("/change-password", async (req, res) => {
  const { email, currentPassword, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect current password" });

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (err) {
    console.error("Change password error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
