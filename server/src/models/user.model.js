import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  nickName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.model("User", UserSchema);
