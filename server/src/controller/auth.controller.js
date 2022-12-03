import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { expressjwt } from "express-jwt";
import config from "../config/config.js";
import bcrypt from "bcryptjs";
import validateSignIn from "../validation/signin.validation.js";
import validateSignUp from "../validation/signup.validation.js";

export const signUp = (req, res) => {
  const { errors, isValid } = validateSignUp(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      User.findOne({ name: req.body.name }).then((user) => {
        if (user) {
          return res.status(400).json({ name: "Name already exists" });
        } else {
          const newUser = new User({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            contact: req.body.contact,
            city: req.body.city,
            address: req.body.address,
            password: req.body.password,
          });

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then((user) => {
                  res.json(user);
                })
                .catch((err) => console.log(err));
            });
          });
        }
      });
    }
  });
};

const signIn = (req, res) => {
  const { errors, isValid } = validateSignIn(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }, (err, user) => {
    if (err || !user) {
      return res.status(401).json({ email: "User not found!" });
    }
    bcrypt.compare(req.body.password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name,
        };
        jwt.sign(
          payload,
          config.SECRET_KEY,
          {
            expiresIn: 31556926,
          },
          (err, token) => {
            res.cookie("token", token, { httpOnly: true });
            res.json({
              success: true,
              token: token,
            });
          }
        );
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

export { signIn, signOut };
