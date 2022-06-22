const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: String },
    color: {type: Array},
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
