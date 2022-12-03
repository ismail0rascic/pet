import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import {validatePasswordChange} from "../validation/password.validation.js";

export const changePassword = async (req, res) => {
  const id = req.params.id;

  const { errors, isValid } = validatePasswordChange(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.find({ _id: id }).exec((err, data) => {
    bcrypt.compare(req.body.oldPassword, data[0].password).then((isMatch) => {
      if (isMatch) {
        let update = {
          _id: data[0]._id,
          firstName: data[0].firstName,
          lastName: data[0].lastName,
          nickName: data[0].nickName,
          email: data[0].email,
          password: req.body.newPassword,
          date: data[0].date,
        };
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(update.password, salt, (err, hash) => {
            if (err) throw err;
            update.password = hash;
            User.findOneAndUpdate(
              { email: data[0].email },
              update,
              (err, data) => {
                return res.status(200).json("Password is changed");
              }
            );
          });
        });
      } else {
        return res
          .status(400)
          .json({ oldPassword: "Old password is incorrect" });
      }
    });
  });
};
