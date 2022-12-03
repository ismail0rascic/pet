import Option from "../models/option.model.js";
const options = [
  {
    name: "lose",
  },
  {
    name: "find",
  },
  {
    name: "gift",
  },
  {
    name: "adopt",
  },
];

export const seedOptions = async () => {
  Option.find().then(async (data) => {
    if (data.length === 0) await Option.insertMany(options);
  });
};
