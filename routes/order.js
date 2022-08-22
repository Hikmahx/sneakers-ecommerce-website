const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Order = require("../models/Order");
const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
  verifyToken,
} = require("../middleware/auth");
const dotenv = require("dotenv");
dotenv.config({ path: "../config/config.env" });

// @ route GET api/order
// @ desc  Get orders of all user
// @ access Private
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @ route GET api/order
// @ desc  Get user orders
// @ access Private
router.get("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const order = await Order.find({ user: req.params.id });
    res.status(200).json(order);
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({ msg: "order doesn't exist" });
    }
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


// @ route GET api/order/income
// @ desc  Get monthly income
// @ access Private
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: prevMonth } } },
      { $project: { month: { $month: "$createdAt" }, sales: "$amount" } },
      { $group: { _id: "$month", total: { $sum: "$sales" } } },
    ]);
    res.status(200).json(income);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});



// @ route POST api/order
// @ desc  Create new order
// @ access Private
router.post(
  "/",
  verifyToken,
  body("user", "Please enter a user id").not().isEmpty(),
  body("products", "Please enter atleast one product").not().isEmpty(),
  body("amount", "Please enter its amount").not().isEmpty(),
  body("address", "Please enter the address").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let order = new Order(req.body);

      let newOrder = await order.save();

      res.status(200).json(newOrder);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @ route    PUT api/order
// @desc      Update order
// @ access   Private
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({ msg: "Order doesn't exist" });
    }
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @ route    DELETE api/order
// @ desc     Delete order
// @ access   Private
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "order is successfully deleted" });
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({ msg: "order doesn't exist" });
    }
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
