import mongoose from "mongoose";

Date.prototype.getWeek = function () {
  var dt = new Date(this.getFullYear(), 0, 1);
  return Math.ceil(((this - dt) / 86400000 + dt.getDay() + 1) / 7);
};

const TransactionSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  amount: {
    type: Number,
    default: 0,
  },
  currency: {
    type: String,
  },
  type: {
    type: String,
  },
  created: {
    day: {
      type: String,
      default: new Date().toLocaleDateString("default", { weekday: "long" }),
    },
    dayValue: {
      type: String,
      default: new Date().getDate(),
    },
    week: {
      type: String,
      default: new Date().getWeek(),
    },

    month: {
      type: String,
      default: new Date().toLocaleString("default", { month: "long" }),
    },
    monthValue: {
      type: String,
      default: new Date().getMonth(),
    },
    year: { type: String, default: new Date().getFullYear() },
  },
  updated: Date,
  objectId: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Transaction", TransactionSchema);
