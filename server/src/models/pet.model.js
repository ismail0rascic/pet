import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  desc: {
    type: String,
  },
  image: {
    type: String,
  },
  award: {
    type: String,
  },
  status: {
    type: String,
  },
  option: {
    type: String,
  },
  userId: {
    type: String,
  },
});
export default mongoose.model("Item", ItemSchema);
