import { createContext, useState, useEffect, useContext, useRef } from "react";
import io from "socket.io-client";

export const BombContext = createContext();

export const useBomb = () => {
  const context = useContext(BombContext);
  if (!context) throw new Error("useBomb must be used within a BombProvider");
  return context;
};

function BombProvider({ children }) {
  const socketRef = useRef();

  if (!socketRef.current) {
    socketRef.current = io("http://localhost:3000");
  }

  const socket = socketRef.current;
  const [bomb, setBomb] = useState(false);
  const [bombController, setBombController] = useState(false);
  const [usersCount, setUsersCount] = useState(0);

  const handleBomb = () => {
    const newBombState = !bomb;
    setBomb(newBombState);
    socket.emit("turnOnBomb", newBombState);
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Socket connected");

      // Solicitar el estado inicial de la bomba
      socket.on("initialBombState", (initialState) => {
        console.log("Initial bomb state received: ", initialState);
        setBomb(initialState);
        setBombController(initialState);
      });
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    socket.on("bomb", (bombState) => {
      console.log("Bomb state received from server: ", bombState);
      setBomb(bombState);
      setBombController(bombState);
    });

    socket.on("usersCount", (count) => {
      console.log("Users count received from server: ", count);
      setUsersCount(count);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("bomb");
      socket.off("usersCount");
      socket.off("initialBombState");
    };
  }, [socket]);

  return (
    <BombContext.Provider
      value={{ handleBomb, bomb, bombController, socket, usersCount }}
    >
      {children}
    </BombContext.Provider>
  );
}

export default BombProvider;
