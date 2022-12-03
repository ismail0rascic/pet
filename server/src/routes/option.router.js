import express from "express";
import { getOptions } from "../controller/option.controller.js";
const router = express.Router();
router.route("/api/options").get(getOptions);
export default router;
