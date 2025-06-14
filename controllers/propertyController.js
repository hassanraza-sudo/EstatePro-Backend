const Property = require("../models/Property");

exports.createProperty = async (req, res) => {
  try {
    const property = await Property.create({
      ...req.body,
      listedBy: req.user.userId,
    });
    res.status(201).json(property);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllProperties = async (req, res) => {
  const properties = await Property.find().populate("listedBy", "name email");
  res.json(properties);
};
