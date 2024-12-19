import bcryptjs from "bcryptjs";
import userModel from "../Models/userModel.js";
import jwt from "jsonwebtoken";

export const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "All fields are required" });
    }
    // check if user exist
    const existUser = await userModel.findOne({ email });
    if (!existUser) {
      res.status(400).json({ message: "User does not exist" });
    }
    // compare password
    const comparePassword = await bcryptjs.compare(
      password,
      existUser.password
    );
    if (!comparePassword) {
      res.status(400).json({ message: "Incorrect password" });
    }
    // generate token
    const token = await jwt.sign({ _id: existUser?._id }, "helloworld");
    if (!token) {
      res.status(500).json({ message: "Error in generating token" });
    }
    existUser.refreshtoken = token;
    existUser.save({ validateBeforeSave: true });
    res.status(200).json({ message: "User logged in successfully" });
  } catch (error) {
    throw error;
  }
};

export const SignupUser = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).json({ message: "All fields are required" });
    }

    // check if user already exist
    const existUser = await userModel.findOne({ email });
    if (existUser) {
      res.status(400).json({ message: "User already exist" });
    }

    // hash password
    const hashPassword = await bcryptjs.hash(password, 10);

    // create new user
    const newUser = new userModel({
      name,
      password: hashPassword,
      email,
    });
    await newUser.save();

    // generate token
    const token = await jwt.sign({ _id: newUser?._id }, "helloworld");
    if (!token) {
      res.status(500).json({ message: "Error in generating token" });
    }
    newUser.refreshtoken = token;
    newUser.save({ validateBeforeSave: true });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    throw error;
  }
};
