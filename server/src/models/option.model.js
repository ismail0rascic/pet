import mongoose from "mongoose";

const OptionSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});
export default mongoose.model("Option", OptionSchema);
