import express from "express";
import { getUser } from "../controller/user.controller.js";

const router = express.Router();
router.get("/api/users/:id", getUser);
export default router;
