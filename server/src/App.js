import bodyParser from "body-parser";
import express from "express";
import passport from "passport";
import cookieParser from "cookie-parser";
import { seedOptions } from "./seed/seed.options.js";
import { seedCategories } from "./seed/seed.categories.js";
import auth from "./routes/auth.router.js";
import user from "./routes/user.router.js";
import category from "./routes/category.router.js";
import pet from "./routes/pet.router.js";
import upload from "./routes/upload.router.js";
import option from "./routes/option.router.js";


import("./config/passport.js");

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
app.use("/", auth);
app.use("/", user);
app.use("/", category);
app.use("/", option);

app.use("/", pet);
app.use(cookieParser());

app.use("/", upload);
app.use(passport.initialize());
seedOptions();
seedCategories();

export default app;
