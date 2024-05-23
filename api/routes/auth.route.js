import express from "express";
import {
  signup,
  signin,
  google,
  signout,
} from "../controllers/auth.controller.js";

const router = express.Router();

//Sign UP
router.post("/signup", signup);

//Sign IN
router.post("/signin", signin);

//Google Sign In
router.post("/google", google);

//Sign out
router.get("/signout", signout);
export default router;
