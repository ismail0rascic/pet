import express from "express";
import { changePassword } from "../controller/password.controller.js";

import {
  requireSignIn,
  hasAuthorization,
} from "../controller/auth.controller.js";

const router = express.Router();
router
  .route("/api/users/password/:id")
  .put(requireSignIn, hasAuthorization, changePassword);

export default router;
