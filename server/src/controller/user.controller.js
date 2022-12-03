import {
  validateUserInput,
  validateUserChange,
} from "../validation/user.validation.js";
import { validatePasswordDelete } from "../validation/password.validation.js";

import User from "../models/user.model.js";

import bcrypt from "bcryptjs";

const createUser = (req, res) => {
  const { errors, isValid } = validateUserInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        nickName: req.body.nickName,
        email: req.body.email,
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
};

const readUser = (req, res) => {
  const id = req.params.id;
  User.findById(id).exec((err, data) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json(data);
  });
};

const updateUser = (req, res) => {
  const id = req.params.id;

  const { errors, isValid } = validateUserChange(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  } else {
    User.find({ _id: id }).exec((err, data) => {
      if (data.length > 0) {
        let update = {
          _id: data[0]._id,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          nickName: data[0].nickName,
          email: req.body.email,
          password: data[0].password,
          date: data[0].date,
        };

        User.findOneAndUpdate({ email: data[0].email }, update, (err, data) => {
          return res.status(200).json("User is changed");
        });
      } else {
        return res.status(400).json({ email: "User not found" });
      }
    });
  }
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  const { errors, isValid } = validatePasswordDelete(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findById(id).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json({ password: "User not found" });
    }
    bcrypt.compare(req.body.password, data.password).then((isMatch) => {
      if (isMatch) {
        data.remove((err, data) => {
          if (err || !data) {
            return res.status(404).json(err.message);
          }
          res.status(200).json("User deleted");
        });
      } else {
        res.status(400).json({ password: "Wrong password" });
      }
    });
  });
};

export { createUser, readUser, updateUser, deleteUser };
