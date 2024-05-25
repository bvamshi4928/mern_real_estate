import express from "express";
import {
  createListing,
  deleteListing,
  updateListing
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

//create listing
router.post("/create", verifyToken, createListing);

//delete listing
router.delete("/delete/:id", verifyToken, deleteListing);

//edit or update a listing
router.post("/update/:id", verifyToken, updateListing);

export default router;
