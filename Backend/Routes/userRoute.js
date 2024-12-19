import { Router } from "express";
import { LoginUser, SignupUser } from "../Controllers/userController.js";
import { AuthCheck } from "../Middleware/Auth.js";

let route = Router();

// login
route.post("/login", LoginUser);

route.get("/getpassword", AuthCheck, (req, res) => {
  res.send({ message: "Password fetched successfully" });
});

// signup
route.post("/signup", SignupUser);

export default route;
