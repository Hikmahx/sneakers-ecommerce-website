const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Cart = require("../models/Cart");
const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
  verifyToken,
} = require("../middleware/auth");
const dotenv = require("dotenv");
dotenv.config({ path: "../config/config.env" });

// @ route GET api/cart
// @ desc  Get carts of all user
// @ access Private
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


// @ route GET api/cart
// @ desc  Get user cart
// @ access Private
router.get("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    // const cart = await Cart.findOne({userId: req.params.id})
    const cart = await Cart.findById(req.params.id);
    res.status(200).json(cart);
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({ msg: "cart doesn't exist" });
    }
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


// @ route POST api/cart
// @ desc  Create new cart
// @ access Private
router.post(
  "/",
  verifyToken,
  // body("userId", "Please enter a user id").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let cart = new Cart(req.body);

      let newCart = await cart.save();

      res.status(200).json(newCart);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @ route    PUT api/cart
// @desc      Update cart
// @ access   Private
router.put("/:id", verifyTokenAndAuthorization , async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({ msg: "cart doesn't exist" });
    }
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @ route    DELETE api/cart
// @ desc     Delete cart
// @ access   Private
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "cart is successfully deleted" });
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({ msg: "cart doesn't exist" });
    }
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


module.exports = router;
