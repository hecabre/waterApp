import express from "express";
import http from "http";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { handleSocketConnections } from "./sockets/socketHandlers.js";
import { connectDb } from "./db.js";
import authRoutes from "./api/routes/auth.routes.js";
import cookieParser from "cookie-parser";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const server = http.createServer(app);

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/api", authRoutes);

connectDb();
handleSocketConnections(server);

server.listen(3000, () => {
  console.log("Server on port 3000");
});
