import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authRequired = (req, res, next) => {
  try {
    const token = req.cookies.token;
    jwt.verify(token, process.env.TOKEN, (error, user) => {
      if (error) {
        if (error.name === "JsonWebTokenError") {
          return res.status(403).json({ message: "Token inválido" });
        }
        if (error.name === "TokenExpiredError") {
          return res.status(403).json({ message: "Token expirado" });
        }
        return res.status(403).json({ message: "Error al verificar el token" });
      }

      req.user = user;
      next();
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Algo salió mal, intenta de nuevo más tarde" });
  }
};
