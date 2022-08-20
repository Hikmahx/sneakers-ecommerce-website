const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    },
    products: [
      { type: Array, required: true }
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
    paymentID: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
