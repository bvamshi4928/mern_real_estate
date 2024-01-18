import User from "../models/userModel.js";
import bcryptjs from "bcrypt";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPassword = bcryptjs.hashSync(password, 10);
  try {
    const newUser = new User({ username, email, password: hashedPassword });
    // console.log(newUser);
    await newUser.save();
    res.status(201).json("new user created successfully");
  } catch (err) {
    res.status(500).json(err.message);
  }
};
