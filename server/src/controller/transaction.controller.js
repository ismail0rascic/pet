import Transaction from "../models/transaction.model.js";
import _ from "lodash";
import {
  validateTransactionInput,
  validateTransactionChange,
} from "../validation/transaction.validation.js";

const readAllTransactions = (req, res) => {
  Transaction.find((err, data) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json(data);
  });
};

const createTransaction = (req, res) => {
  const { errors, isValid } = validateTransactionInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  const transaction = Transaction(req.body);
  transaction.save((err, data) => {
    if (err) {
      return res.status(400).json(err.message);
    }
    res.status(201).json(data);
  });
};

const readTransaction = (req, res) => {
  const id = req.params.id;
  Transaction.find({ objectId: id }).exec((err, data) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json(data);
  });
};
const updateTransaction = (req, res) => {
  const { errors, isValid } = validateTransactionChange(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const id = req.params.id;
  Transaction.findById(id).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json("Transaction not found");
    }
    const transaction = _.extend(data, req.body);
    transaction.save((err, data) => {
      if (err) {
        return res.status(400).json(err.message);
      }
      res.status(200).json(data);
    });
  });
};
const deleteTransaction = (req, res) => {
  const id = req.params.id;
  Transaction.findById(id).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json("Transaction not found");
    }
    data.remove((err, data) => {
      if (err || !data) {
        return res.status(404).json(err.message);
      }
      res.status(200).json("Transaction deleted.");
    });
  });
};

export {
  readAllTransactions,
  createTransaction,
  readTransaction,
  updateTransaction,
  deleteTransaction,
};
