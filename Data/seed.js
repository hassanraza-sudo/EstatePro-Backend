const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const Property = require("../models/Property");

//dotenv.config(); // Load .env variables

// ✅ Connect to MongoDB Atlas using MONGODB_URI from .env
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    seedData(); // Call seed function after connection
  })
  .catch((err) => {
    console.error(" MongoDB connection failed:", err);
  });

// ✅ Dummy properties to insert
const dummyProperties = [
  {
    title: "Modern House in Karachi",
    address: "123 Street A, Karachi",
    city: "Karachi",
    type: "house",
    price: 150000,
    description: "A beautiful modern house with a garden.",
    images: [
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    title: "Luxury Apartment in Lahore",
    address: "456 Avenue B, Lahore",
    city: "Lahore",
    type: "apartment",
    price: 250000,
    description: "Spacious apartment with a city view.",
    images: [
      "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    title: "Commercial Plaza in Islamabad",
    address: "789 Plaza Road, Islamabad",
    city: "Islamabad",
    type: "commercial",
    price: 500000,
    description: "Perfect for office and retail business.",
    images: [
      "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    title: "Budget Apartment in Multan",
    address: "101 Green St, Multan",
    city: "Multan",
    type: "apartment",
    price: 95000,
    description: "Affordable living in the heart of Multan.",
    images: [
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    title: "Villa with Pool in Hyderabad",
    address: "88 Luxury Lane, Hyderabad",
    city: "Hyderabad",
    type: "house",
    price: 400000,
    description: "Spacious villa with private pool and lawn.",
    images: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    title: "Shop for Rent in Faisalabad",
    address: "23 Market Road, Faisalabad",
    city: "Faisalabad",
    type: "commercial",
    price: 130000,
    description: "Ideal for a retail shop or mini-mart.",
    images: [
      "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    title: "Luxury Penthouse in Karachi",
    address: "98 Sky Tower, Clifton, Karachi",
    city: "Karachi",
    type: "apartment",
    price: 800000,
    description: "Penthouse with panoramic sea view.",
    images: [
      "https://images.pexels.com/photos/271800/pexels-photo-271800.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    title: "Family House in Peshawar",
    address: "12 Peace Colony, Peshawar",
    city: "Peshawar",
    type: "house",
    price: 180000,
    description: "Comfortable family house with 3 bedrooms.",
    images: [
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    title: "Corner Plot in Quetta",
    address: "11A Model Town, Quetta",
    city: "Quetta",
    type: "land",
    price: 210000,
    description: "Corner residential plot in a gated society.",
    images: [
      "https://mir-s3-cdn-cf.behance.net/projects/404/33fe8b95043147.Y3JvcCwzMzgxLDI2NDQsMjE0MiwxMzA1.jpg",
    ],
  },
  {
    title: "Office Space in Rawalpindi",
    address: "56 Business Center, Rawalpindi",
    city: "Rawalpindi",
    type: "commercial",
    price: 300000,
    description: "Fully furnished office with 5 rooms.",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/1da40ebb49f1d61f1afc177c2f9cd02379efb972.webp",
    ],
  },
  {
    title: "Elegant Villa in Sukkur",
    address: "17 River Side, Sukkur",
    city: "Sukkur",
    type: "house",
    price: 350000,
    description: "Peaceful villa located near the riverbank.",
    images: [
      "https://images.pexels.com/photos/259597/pexels-photo-259597.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    title: "Studio Apartment in Sialkot",
    address: "Apartment 404, Sky Heights, Sialkot",
    city: "Sialkot",
    type: "apartment",
    price: 100000,
    description: "Ideal for students and working professionals.",
    images: [
      "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
];

// ✅ Seed the database
const seedData = async () => {
  try {
    await Property.deleteMany({});
    await Property.insertMany(dummyProperties);
    console.log("Data seeded successfully!");
  } catch (err) {
    console.error("Failed to seed data:", err);
  } finally {
    mongoose.connection.close();
  }
};
