import express from "express";
import {
  test,
  updateUser,
  deleteUser,
  getUserListings,
  getUser
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);

//UPDATE

router.post("/update/:id", verifyToken, updateUser);

//DELETE
router.delete("/delete/:id", verifyToken, deleteUser);

//get listing

router.get("/listings/:id", verifyToken, getUserListings);

//get user
router.get("/:id", verifyToken, getUser);

export default router;
