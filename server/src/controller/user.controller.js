import User from "../models/user.model.js";

const getUser = (req, res) => {
  const id = req.params.id;
  User.findById(id).exec((err, data) => {
    res.status(200).json(data);
  });
};

export { getUser };
