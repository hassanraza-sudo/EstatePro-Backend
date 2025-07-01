// controllers/propertyController.js
const Property = require("../models/Property");

exports.createProperty = async (req, res) => {
  try {
    const property = await Property.create({
      ...req.body,
      user: req.user._id, // ✅ Correct field name
    });
    res.status(201).json(property);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Optional enhancement: show who listed the property
exports.getAllProperties = async (req, res) => {
  const properties = await Property.find().populate("user", "name email");
  res.json(properties);
};

// ✅ NEW: Get properties by logged-in user
exports.getMyProperties = async (req, res) => {
  try {
    const myProps = await Property.find({ user: req.user._id });
    res.status(200).json(myProps);
  } catch (err) {
    console.error("Fetch my properties failed:", err.message);
    res.status(500).json({ message: "Error fetching your properties" });
  }
};
exports.deleteProperty = async (req, res) => {
  try {
    const propertyId = req.params.id;
    // logic to delete
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting property" });
  }
};
