import bodyParser from "body-parser";
import express from "express";
import users from "./routes/user.router.js";
import auth from "./routes/auth.router.js";
import transactions from "./routes/transaction.router.js";
import password from "./routes/password.router.js";

import cors from "cors";
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/", users);
app.use("/", auth);
app.use("/", transactions);
app.use("/", password);
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.message });
  }
});

export default app;
