import dotenv from "dotenv";
dotenv.config();
import express from "express";
import DatabaseConnection from "./db/db.js";
import userRoute from "./Routes/userRoute.js";

const app = express();

let PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use("/pwm/api/user", userRoute);

// database connection
DatabaseConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
  });
});
