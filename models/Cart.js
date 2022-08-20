const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    },
    products: {
      type: Array,
      unique: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
