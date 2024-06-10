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
  const [bomb1, setBomb1] = useState(false);
  const [bomb2, setBomb2] = useState(false);
  const [bombController, setBombController] = useState(null);
  const [usersCount, setUsersCount] = useState(0);

  const handleBomb1 = () => {
    if (!bomb2) {
      const newBombState = !bomb1;
      setBomb1(newBombState);
      socket.emit("turnOnBomb1");
    } else {
      console.log("Bomb 2 is already on, cannot turn on Bomb 1");
    }
  };

  const handleBomb2 = () => {
    if (!bomb1) {
      const newBombState = !bomb2;
      setBomb2(newBombState);
      socket.emit("turnOnBomb2");
    } else {
      console.log("Bomb 1 is already on, cannot turn on Bomb 2");
    }
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Socket connected");

      socket.on("initialBombState", (initialState) => {
        console.log("Initial bomb state received: ", initialState);
        setBomb1(initialState.bomb1);
        setBomb2(initialState.bomb2);
        setBombController(initialState.bomb1 || initialState.bomb2);
      });
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    socket.on("bomb1", (bombState) => {
      console.log("Bomb 1 state received from server: ", bombState);
      setBomb1(bombState);
      setBombController(bombState || bomb2);
    });

    socket.on("bomb2", (bombState) => {
      console.log("Bomb 2 state received from server: ", bombState);
      setBomb2(bombState);
      setBombController(bombState || bomb1);
    });

    socket.on("usersCount", (count) => {
      console.log("Users count received from server: ", count);
      setUsersCount(count);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("bomb1");
      socket.off("bomb2");
      socket.off("usersCount");
      socket.off("initialBombState");
    };
  }, [socket, bomb1, bomb2]);

  return (
    <BombContext.Provider
      value={{
        handleBomb1,
        handleBomb2,
        bomb1,
        bomb2,
        bombController,
        socket,
        usersCount,
      }}
    >
      {children}
    </BombContext.Provider>
  );
}

export default BombProvider;
