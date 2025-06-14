const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  createProperty,
  getAllProperties,
} = require("../controllers/propertyController");

router.post("/", auth, createProperty);
router.get("/", getAllProperties);

module.exports = router;
