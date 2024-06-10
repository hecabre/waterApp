import { Server as SocketServer } from "socket.io";
import dotenv from "dotenv";
import { authRequired } from "../api/middlewares/validateToken.js";

let users = 0;
let bombState = false;

export const handleSocketConnections = (server) => {
  dotenv.config();
  const io = new SocketServer(server, {
    cors: {
      origin: "http://localhost:5173",
      credentials: true,
      methods: ["GET", "POST"], // Métodos permitidos
      allowedHeaders: ["Authorization"], // Encabezados permitidos
    },
  });

  
  io.on("connection", (socket) => {
    users++;
    console.log("User connected. Total users: " + users);
    io.emit("usersCount", users);

    socket.emit("initialBombState", bombState);

    socket.on("disconnect", () => {
      users--;
      console.log("User disconnected. Total users: " + users);
      io.emit("usersCount", users);
    });

    socket.on("turnOnBomb", (newBombState) => {
      bombState = newBombState;
      console.log("Bomb state: ", bombState);
      io.emit("bomb", bombState);
    });
  });
};
