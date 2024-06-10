import { useState } from "react";
import { useBomb } from "../context/BombContext";
import { Sidebar } from "../components/Sidebar";
import { PowerIcon, XCircleIcon } from "@heroicons/react/24/solid";
import LineChart from "../components/charts/LineChart";
import BarChart from "../components/charts/BarChart";
import RadarChart from "../components/charts/RadarChart";
import { CakeChart } from "../components/charts/CakeChart";

function App() {
  const { handleBomb1, handleBomb2, bomb1, bomb2, bombController, usersCount } =
    useBomb();
  const [alertMessage, setAlertMessage] = useState("");

  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => {
      setAlertMessage("");
    }, 3000);
  };

  const handleBomb1Click = () => {
    if (bomb2) {
      showAlert(
        "No puedes encender la Bomba 1 mientras la Bomba 2 está encendida."
      );
    } else {
      handleBomb1();
    }
  };

  const handleBomb2Click = () => {
    if (bomb1) {
      showAlert(
        "No puedes encender la Bomba 2 mientras la Bomba 1 está encendida."
      );
    } else {
      handleBomb2();
    }
  };

  return (
    <div
      className={
        bombController
          ? "flex !bg-gradient-to-br from-deep-sapphire-400 to-deep-sapphire-700/50 transition-colors min-h-screen justify-center"
          : "flex bg-deep-sapphire-50 min-h-screen justify-center"
      }
    >
      <div className="">
        <div className="flex justify-between py-3 hover:cursor-pointer transition-colors items-center">
          <div className="flex" onClick={handleBomb1Click}>
            {bomb1 ? (
              <XCircleIcon
                className={
                  bomb1
                    ? "w-10 h-10 text-white transition-colors"
                    : "w-10 h-10 text-black transition-colors"
                }
              />
            ) : (
              <PowerIcon
                className={
                  bomb1
                    ? "w-10 h-10 text-white transition-colors"
                    : "w-10 h-10 text-black transition-colors"
                }
              />
            )}

            <button className="bg-slate-400 p-2 rounded text-white font-bold transition-colors">
              <h2
                className={
                  bomb1
                    ? "text-white transition-colors"
                    : "text-black transition-colors"
                }
              >
                La bomba 1 está: {bomb1 ? "encendida" : "apagada"}
              </h2>
            </button>
          </div>{" "}
          <div className="flex" onClick={handleBomb2Click}>
            {bomb2 ? (
              <XCircleIcon
                className={
                  bomb2 || bomb1
                    ? "w-10 h-10 text-white transition-colors"
                    : "w-10 h-10 text-black transition-colors"
                }
              />
            ) : (
              <PowerIcon
                className={
                  bomb2 || bomb1
                    ? "w-10 h-10 text-white transition-colors"
                    : "w-10 h-10 text-black transition-colors"
                }
              />
            )}

            <button className="bg-slate-400 p-2 rounded text-white font-bold transition-colors">
              <h2
                className={
                  bomb2 || bomb1
                    ? "text-white transition-colors"
                    : "text-black transition-colors"
                }
              >
                La bomba 2 está: {bomb2 ? "encendida" : "apagada"}
              </h2>
            </button>
          </div>
          <h3
            className={
              bombController
                ? "text-white font-bold transition-colors"
                : "text-black font-bold transition-colors"
            }
          >
            Usuarios conectados: {usersCount / 2}
          </h3>
        </div>
        {alertMessage && (
          <div className="bg-red-500 text-white text-center py-2 my-2">
            <p>{alertMessage}</p>
          </div>
        )}
        <div className="mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 items-center transition-colors">
          <LineChart />
          <BarChart />
          <RadarChart />
          <CakeChart />
        </div>
      </div>
    </div>
  );
}

export default App;
