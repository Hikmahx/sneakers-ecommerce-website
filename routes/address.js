const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Address = require("../models/Address");
const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
  verifyTokenAndUser,
  verifyToken,
} = require("../middleware/auth");
const dotenv = require("dotenv");
dotenv.config({ path: "../config/config.env" });

// @ route GET api/address
// @ desc  Get addresses of all user
// @ access Private
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const addresses = await Address.find();
    res.status(200).json(addresses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @ route GET api/address
// @ desc  Get user address
// @ access Private
router.get("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const userId = req.params.id;
    const address = await Address.find({user:userId});
    
    res.status(200).json(address);
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({ msg: "address doesn't exist" });
    }
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


// @ route POST api/address
// @ desc  Create new address
// @ access Private
router.post(
  "/",
  verifyToken,
  body("firstname", "Please enter firstname").not().isEmpty(),
  body("lastname", "Please enter lastname").not().isEmpty(),
  body("phone", "Please enter phone not").not().isEmpty(),
  body("streetAddress", "Please enter the street address").not().isEmpty(),
  body("city", "Please enter city").not().isEmpty(),
  body("state", "Please enter state").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let address = new Address(req.body);

      let newAddress = await address.save();

      res.status(200).json(newAddress);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @ route    PUT api/address
// @desc      Update address
// @ access   Private
router.put("/:id", verifyTokenAndUser , async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    const updatedAddress = await Address.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedAddress);
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({ msg: "address doesn't exist" });
    }
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


// @ route    PUT api/address/default/id
// @desc      Set checked address
// @ access   Private
router.put("/default/:id", verifyToken, async (req, res) => {
  try {
    // ALL THE USER ADDRESSES
    const addresses = await Address.find({ user: req.body.user });

    const { checked } = req.body
    addresses.forEach(async (userAddress) => {
      // IF NOT THE CHECKED ONE, SET TO FALSE
      await Address.findByIdAndUpdate(
        userAddress.id !== req.params.id ? userAddress._id : req.params.id,
        {
          $set: {
            checked: userAddress.id !== req.params.id ? false : true
          }
        },
        { new: true }
      )
    })

    let updatedAddress = await Address.find({ user: req.body.user })

    // addresses.markModified('checked')
    // await addresses.save()

    res.status(200).json(updatedAddress);
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({ msg: "address doesn't exist" });
    }
    console.error(err.message);
    res.status(500).send("Server Error");
  }


});

// @ route    DELETE api/address
// @ desc     Delete address
// @ access   Private
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Address.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "address is successfully deleted" });
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({ msg: "address doesn't exist" });
    }
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


module.exports = router;
