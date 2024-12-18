import dotenv from "dotenv";
dotenv.config();
import express from "express";
import DatabaseConnection from "./db/db.js";

const app = express();

let PORT = process.env.PORT || 5000;

DatabaseConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
  });
});
