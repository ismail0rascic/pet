import Category from "../models/category.model.js";
const categories = [
  {
    name: "Cats",
  },
  {
    name: "Dogs",
  },
  {
    name: "Others",
  },
];

export const seedCategories = async () => {
  Category.find().then(async (data) => {
    if (data.length === 0) await Category.insertMany(categories);
  });
};
