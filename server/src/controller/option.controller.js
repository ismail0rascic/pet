import Option from "../models/option.model.js";

export const getOptions = (req, res) => {
  Option.find().then((data, err) => {
    res.status(200).json(data);
  });
};
