const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require("../middleware/auth");
const User = require("../models/User");
const dotenv = require("dotenv");
dotenv.config({ path: "../config/config.env" });

// @ route    GET api/auth
// @desc      Get logged in user
// @ access   Private
router.get("/", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(400).json({ msg: "user doesn't exist" });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @ route    POST api/auth
// @ desc     authenticate (Login) user & get token
// @ access   Public
router.post(
  "/",
  body("email", "Please include a valid email").isEmail(),
  body("password", "Password is required").exists(),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: "Email is invalid" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Password is invalid" });
      }

      const payload = {
        user: {
          id: user.id,
          // only an admin can take CRUD operations to collections & delete any users
          // if not an admin, the user can only make CRUD operations to his/her account
          isAdmin: user.isAdmin,
        },
      };
      jwt.sign(
        payload,
        process.env.JWTSECRET,
        {
          expiresIn: 360000,
        },
        (error, token) => {
          if (error) throw error;
          const { password, ...others } = user._doc; 
          res.json({
            token, user: {...others}
          });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @ route    PUT api/auth
// @desc      Update user
// @ access   Private
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const { password, currentPassword, ...others } = req.body;
    const user = await User.findById(req.params.id);
    let newPassword;
    // if (!user) {
    //   return res.status(400).json({ msg: "user doesn't exist" });
    // }
    if (password) {
      let salt = await bcrypt.genSalt(10);
      newPassword = await bcrypt.hash(req.body.password, salt);
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Old password isn't correct" });
      }
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        $set: {
          ...others,
          password: newPassword,
        },
      },
      // To ensure it returns the updated User
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({ msg: "user doesn't exist" });
    }
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @ route    DELETE api/auth
// @ desc     Delete user
// @ access   Private
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.user.id);
    if (!user) {
      return res.status(400).json({ msg: "user doesn't exist" });
    }
    res.status(200).json({ msg: "User is successfully deleted" });
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({ msg: "user doesn't exist" });
    }
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
