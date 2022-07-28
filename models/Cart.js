const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    // userId: { type: String, required: true },
    _id: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    },
    products: {
      type: Array,
      unique: true
    }
    // products:
    // [
    //   {
    //     productId: { type: String },
    //     quantity: { type: Number, default: 1 },
    //   },
    // ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
