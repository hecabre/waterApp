import { createContext, useState, useEffect, useContext } from "react";
import io from "socket.io-client";

export const BombContext = createContext();

export const useBomb = () => {
  const context = useContext(BombContext);
  if (!context) throw new Error("useBomb must be used within a context");
  return context;
};

function BombProvider({ children }) {
  const socket = io("http://localhost:3000");

  const [bomb, setBomb] = useState(false);
  const [bombController, setBombController] = useState(false);

  const handleBomb = () => {
    setBomb(!bomb);
    socket.emit("turnOnBomb", bomb);
  };

  useEffect(() => {
    socket.on("bomb", (bombState) => {
      setBombController(bombState);
    });
  }, [socket]);

  return (
    <BombContext.Provider value={(handleBomb, bomb, bombController)}>
      {children}
    </BombContext.Provider>
  );
}

export default BombProvider;
