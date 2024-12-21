import jwt from "jsonwebtoken";

export const AuthCheck = async (req, res, next) => {
  try {
    const token = req.headers["auth-token"];
    console.log(token);

    if (!token) {
      return res.send({ success: false, message: "invalid token" });
    }

    const decodevalue = await jwt.verify(token, "helloworld");
    console.log(decodevalue);
    req.user = decodevalue;
    next();
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: error.message });
  }
};
