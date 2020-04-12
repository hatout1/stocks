const express = require("express");
const userRouter = express.Router();
const passport = require("passport");
const passportConfig = require("../passport/passport");
const User = require("../models/user");
const JWT = require("jsonwebtoken");

const signToken = (userID) => {
  return JWT.sign(
    {
      iss: "project4",
      sub: userID,
    },
    "project4",
    { expiresIn: "1h" }
  );
};

userRouter.post("/register", (req, res) => {
  const { username, password, email } = req.body;
  userRouter.findOne({ username }, (err, user) => {
    if (err)
      res
        .status(500)
        .json({ message: { msgBody: "error has occured", msgError: true } });
    if (user)
      res
        .status(500)
        .json({ message: { msgBody: "User already exist", msgError: true } });
    else {
      const newUser = new User({ username, email, password });
      newUser.save((err) => {
        if (err) {
          res.status(500).json({
            message: { msgBody: "username already exist", msgError: true },
          });
        } else {
          res
            .status(201)
            .json({ message: { msgBody: "User created!", msgError: true } });
        }
      });
    }
  });
});

userRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    if (req.isAuthenticated()) {
      const { _id, username } = req.user;
      const token = signToken(_id);
      res.cookie("access_token", token, { httpOnly: true, sameSite: true });
      res.status(200).json({ isAuthenticated: true, user: { username, _id } });
    }
  }
);

userRouter.get("/all", (req, res) => {
  User.find().then((results) => {
    res.json(results);
  });
});

module.exports = userRouter;
