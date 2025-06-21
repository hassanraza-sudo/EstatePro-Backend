const express = require("express");
const router = express.Router();
const Property = require("../models/Property");

// GET /api/properties?location=Karachi&type=house&price=0-100000
router.get("/", async (req, res) => {
  try {
    const { location, type, price } = req.query;
    const filter = {};

    if (location) {
      filter.city = { $regex: location, $options: "i" };
    }

    if (type) {
      filter.type = type;
    }

    if (price) {
      if (price.includes("-")) {
        const [min, max] = price.split("-").map(Number);
        filter.price = { $gte: min, $lte: max };
      } else if (price.includes("+")) {
        const min = parseInt(price);
        filter.price = { $gte: min };
      }
    }

    const properties = await Property.find(filter).sort({ createdAt: -1 });
    res.status(200).json(properties);
    console.log("Fetched properties:", properties);
  } catch (error) {
    console.error("Failed to fetch properties:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
