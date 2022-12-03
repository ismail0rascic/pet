import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { expressjwt } from "express-jwt";
import config from "../config/config.js";
import bcrypt from "bcryptjs";
import validateSignInput from "../validation/signin.validation.js";

const signIn = (req, res) => {
  const { errors, isValid } = validateSignInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }, (err, user) => {
    if (err || !user) {
      return res.status(401).json({ email: "User not found!" });
    }
    bcrypt.compare(req.body.password, user.password).then((isMatch) => {
      if (isMatch) {
        const token = jwt.sign({ _id: user._id }, config.SECRET_KEY);
        res.cookie("token", token, { expire: new Date() + 999 });
        res.status(200).json({
          token,
          user: { _id: user._id, name: user.name, email: user.email },
        });
      } else {
        return res.status(401).json({ password: "wrong password" });
      }
    });
  });
};

const signOut = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "User signed out." });
};
const requireSignIn = expressjwt({
  secret: config.SECRET_KEY,
  algorithms: ["HS256"],
  userProperty: "auth",
});
const hasAuthorization = (req, res, next) => {
  const authorized = req.body && req.auth && req.body.id == req.auth._id;
  if (!authorized) return res.status(403).json("User is not authorized!");
  next();
};

export { signIn, signOut, requireSignIn, hasAuthorization };
