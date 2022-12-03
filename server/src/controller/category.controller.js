import Category from "../models/category.model.js";

export const getCategories = (req, res) => {
  Category.find().then((data, err) => {
    res.status(200).json(data);
  });
};
