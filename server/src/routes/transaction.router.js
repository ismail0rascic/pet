import express from "express";
import {
  readAllTransactions,
  createTransaction,
  readTransaction,
  updateTransaction,
  deleteTransaction,
} from "../controller/transaction.controller.js";

const router = express.Router();
router
  .route("/api/transition")
  .get(readAllTransactions)
  .post(createTransaction);
router
  .route("/api/transition/:id")
  .get(readTransaction)
  .put(updateTransaction)
  .delete(deleteTransaction);

export default router;
