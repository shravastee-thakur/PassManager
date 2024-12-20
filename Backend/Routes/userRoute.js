import { Router } from "express";
import { LoginUser, SignupUser } from "../Controllers/userController.js";
import { AuthCheck } from "../Middleware/Auth.js";

let route = Router();

// login
route.post("/login", LoginUser);

// signup
route.post("/signup", SignupUser);

export default route;
