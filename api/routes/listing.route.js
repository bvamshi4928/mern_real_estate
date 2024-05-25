import express from "express";
import { createListing,deleteListing } from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

//create listing
router.post("/create", verifyToken, createListing);

//delete listing
router.delete("/delete/:id", verifyToken, deleteListing);


export default router;
