import { Router } from "express";
import { AuthCheck } from "../Middleware/Auth.js";
import {
  deletePassword,
  getPassword,
  postPassword,
  updatePassword,
} from "../Controllers/passwordController.js";

let route = Router();

// get password
route.get("/getpassword", AuthCheck, getPassword);

// post password
route.post("/postpassword", AuthCheck, postPassword);

// update password
route.put("/updatepassword/:id", AuthCheck, updatePassword);

// delete password
route.delete("/deletepassword/:id", AuthCheck, deletePassword);

export default route;
