const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: String, required: true },
    secondPhone: String,
    streetAddress: { type: String, required: true },
    moreInfo: String,
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: String,
    zipcode: String,
    checked: {type: Boolean, default: false},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", AddressSchema)