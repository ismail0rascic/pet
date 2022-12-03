import express from "express";
import {
  createUser,
  readUser,
  updateUser,
  deleteUser,
} from "../controller/user.controller.js";
import {
  requireSignIn,
  hasAuthorization,
} from "../controller/auth.controller.js";

const router = express.Router();
router.route("/api/users").post(createUser);
router
  .route("/api/users/:id")
  .get(requireSignIn, readUser)
  .put(requireSignIn, hasAuthorization, updateUser)
  .post(requireSignIn, hasAuthorization, deleteUser);

export default router;
