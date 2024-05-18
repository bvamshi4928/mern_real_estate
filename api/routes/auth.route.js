import express from "express";
import { signup,signin } from "../controllers/auth.controller.js";


const router = express.Router();


//Sign UP
router.post("/signup", signup);

//Sign IN
router.post("/signin",signin);

export default router;
