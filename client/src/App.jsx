import { useBomb } from "./context/BombContext";
import { Sidebar } from "./components/Sidebar";
import { PowerIcon, XCircleIcon } from "@heroicons/react/24/solid";
import LineChart from "./components/charts/LineChart";
import BarChart from "./components/charts/BarChart";
import RadarChart from "./components/charts/RadarChart";

function App() {
  const { handleBomb, bombController, usersCount } = useBomb();

  return (
    <div
      className={
        bombController
          ? "flex !bg-gradient-to-br from-deep-sapphire-400 to-deep-sapphire-700/50 gap-10"
          : "flex bg-deep-sapphire-50 gap-10"
      }
    >
      <Sidebar />
      <div className="">
        <div className="flex justify-between py-3  hover:cursor-pointer">
          <div className="flex" onClick={handleBomb}>
            {bombController ? (
              <XCircleIcon
                className={
                  bombController
                    ? "w-10 h-10 text-white"
                    : "w-10 h-10 text-black"
                }
              />
            ) : (
              <PowerIcon
                className={
                  bombController
                    ? "w-10 h-10 text-white"
                    : "w-10 h-10 text-black"
                }
              />
            )}

            <button className="bg-slate-400 p-2 rounded text-white font-bold">
              <h2 className={bombController ? "text-white" : "text-black"}>
                La bomba está: {bombController ? "encendida" : "apagada"}
              </h2>
            </button>
          </div>
          <h3
            className={
              bombController ? "text-white font-bold" : "text-black font-bold"
            }
          >
            {usersCount / 2}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 items-center">
          <LineChart />
          <BarChart />
          <RadarChart />
          <LineChart />
        </div>
      </div>
    </div>
  );
}

export default App;
