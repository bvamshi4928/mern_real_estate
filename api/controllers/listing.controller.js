import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

//CREATE A LISTING
export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

//DELETE A LISTING
export const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return next(errorHandler(404, "listing not found!"));
  }

  if (req.user.id !== listing.userRef) {
    return enxt(errorHandler(401, "Your can only delete your own listing"));
  }

  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json("listing has been deleted");
  } catch (error) {
    next(error);
  }
};

//UPDATE A LISTING
export const updateListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return next(errorHandler(401, "Listing is not found"));
  }
  console.log(listing);
  console.log(req.user.id);
  console.log(listing.userRef);
  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "You can only update your own listings"));
  }

  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};
