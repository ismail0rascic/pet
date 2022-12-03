import express from "express";
import { signIn, signOut, signUp } from "../controller/auth.controller.js";
const router = express.Router();
router.route("/auth/signup").post(signUp);
router.route("/auth/signin").post(signIn);
router.route("/auth/signout").get(signOut);
export default router;
