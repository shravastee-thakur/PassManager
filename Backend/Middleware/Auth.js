import jwt from "jsonwebtoken";

export const AuthCheck = async (req, res, next) => {
  try {
    const token = req.headers["auth-token"];
    console.log(token);
    if (!token) {
      res.status(401).json({ message: "Unauthorized" });
    }

    const decodeValue = await jwt.verify(token, "helloworld");
    console.log(decodeValue);
  } catch (error) {
    throw error;
  }
};
