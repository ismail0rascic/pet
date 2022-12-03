import express from "express";
import {
  getItems,
  addItem,
  updateItem,
  deleteItem,
} from "../controller/pet.controller.js";
const router = express.Router();
router.route("/api/item").get(getItems).post(addItem);
router.route("/api/item/:id").put(updateItem).delete(deleteItem);

export default router;
