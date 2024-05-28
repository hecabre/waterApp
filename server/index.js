import express from "express";
import { Server as SocketServer } from "socket.io";
import http from "http";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import morgan from "morgan";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const server = http.createServer(app);

let users = 0;

const io = new SocketServer(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  users++;
  console.log("User connected " + users);
  socket.on("turnOnBomb", (bombState) => {
    console.log(bombState);
    socket.broadcast.emit("bomb", bombState);
  });
});

server.listen(3000, () => {
  console.log("Server on port 3000");
});
