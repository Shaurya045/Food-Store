import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

const createToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // checking is user already exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }
    // checking is password is valid
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }
    // generating a token
    const token = createToken(user._id);
    // sending the response
    res.status(200).json({ success: true, message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // checking is user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    // checking is email is valid
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }
    // checking is password is strong
    if (password.length < 8) {
      return res
        .status(400)
        .json({ success: false, message: "Password is not strong enough" });
    }

    // hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // creating a new user
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    // generating a token
    const token = createToken(user._id);
    // sending the response
    res
      .status(201)
      .json({ success: true, message: "User registered successfully", token });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export { loginUser, registerUser };
