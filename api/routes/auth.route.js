import express from "express";
import { signup,signin,google } from "../controllers/auth.controller.js";


const router = express.Router();


//Sign UP
router.post("/signup", signup);

//Sign IN
router.post("/signin",signin);


//Google Sign In
router.post("/google",google)
export default router;
