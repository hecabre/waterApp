import { Server as SocketServer } from "socket.io";
import dotenv from "dotenv";
import { authRequired } from "../api/middlewares/validateToken.js";

let users = 0;
let bombState1 = false;
let bombState2 = false;

export const handleSocketConnections = (server) => {
  dotenv.config();
  const io = new SocketServer(server, {
    cors: {
      origin: "http://localhost:5173",
      credentials: true,
      methods: ["GET", "POST"],
      allowedHeaders: ["Authorization"],
    },
  });

  io.on("connection", (socket) => {
    users++;
    console.log("User connected. Total users: " + users);
    io.emit("usersCount", users);

    // Emitimos el estado inicial de ambas bombas
    socket.emit("initialBombState", { bomb1: bombState1, bomb2: bombState2 });

    socket.on("disconnect", () => {
      users--;
      console.log("User disconnected. Total users: " + users);
      io.emit("usersCount", users);
    });

    socket.on("turnOnBomb1", () => {
      if (!bombState2) {
        bombState1 = !bombState1;
        console.log("Bomb 1 state: ", bombState1);
        io.emit("bomb1", bombState1);
      } else {
        console.log("Bomb 2 is already on, cannot turn on Bomb 1");
      }
    });

    socket.on("turnOnBomb2", () => {
      if (!bombState1) {
        bombState2 = !bombState2;
        console.log("Bomb 2 state: ", bombState2);
        io.emit("bomb2", bombState2);
      } else {
        console.log("Bomb 1 is already on, cannot turn on Bomb 2");
      }
    });
  });
};
