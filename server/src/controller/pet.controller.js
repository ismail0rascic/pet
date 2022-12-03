import _ from "lodash";
import Item from "../models/pet.model.js";
import { validateItemAdd } from "../validation/pet.validation.js";

export const getItems = (req, res) => {
  Item.find().then((data, err) => {
    res.status(200).json(data);
  });
};
export const addItem = (req, res) => {
  const { errors, isValid } = validateItemAdd(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  console.log(req.body);
  const item = Item({
    name: req.body.name,
    desc: req.body.desc,
    image: req.body.image,
    category: req.body.category,
    option: req.body.option,

    userId: req.body.userId,
  });
  item.save((err, data) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json(data);
  });
};

export const updateItem = (req, res) => {
  const id = req.params.id;
  Item.findById(id).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json("Item not found");
    }
    const item = _.extend(data, req.body);
    item.save((data) => {
      res.status(200).json(data);
    });
  });
};

export const deleteItem = (req, res) => {
  const id = req.params.id;
  Item.findById(id).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json("Item not found");
    }
    data.remove((err, data) => {
      if (err || !data) {
        return res.status(404).json(err.message);
      }
      res.status(200).json("Item deleted.");
    });
  });
};
