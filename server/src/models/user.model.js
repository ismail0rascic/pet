import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  email: {
    type: String,
  },
  contact: {
    type: String,
  },
  city: {
    type: String,
  },
  address: {
    type: String,
  },
  password: {
    type: String,
  },
});
export default mongoose.model("User", UserSchema);
