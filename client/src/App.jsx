import io from "socket.io-client";
import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";

const socket = io("http://localhost:3000");

function App() {
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
  }, [bomb]);

  return (
    <div>
      <Sidebar />
      <button onClick={handleBomb} className="bg-slate-400">
        Encender Bomba
      </button>
      <h2>La bomba esta: {bombController ? "encendida" : "apagada"}</h2>
    </div>
  );
}

export default App;
