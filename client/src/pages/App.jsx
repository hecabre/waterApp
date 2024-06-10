import { useBomb } from "../context/BombContext";
import { Sidebar } from "../components/Sidebar";
import { PowerIcon, XCircleIcon } from "@heroicons/react/24/solid";
import LineChart from "../components/charts/LineChart";
import BarChart from "../components/charts/BarChart";
import RadarChart from "../components/charts/RadarChart";
import { CakeChart } from "../components/charts/CakeChart";

function App() {
  const { handleBomb, bombController, usersCount } = useBomb();

  return (
    <div
      className={
        bombController
          ? "flex !bg-gradient-to-br from-deep-sapphire-400 to-deep-sapphire-700/50 transition-colors min-h-screen"
          : "flex bg-deep-sapphire-50 min-h-full"
      }
    >
      <Sidebar />
      <div className="">
        <div className="flex justify-between py-3  hover:cursor-pointer transition-colors items-center w-[95vw]">
          <div className="flex" onClick={handleBomb}>
            {bombController ? (
              <XCircleIcon
                className={
                  bombController
                    ? "w-10 h-10 text-white transition-colors"
                    : "w-10 h-10 text-black transition-colors"
                }
              />
            ) : (
              <PowerIcon
                className={
                  bombController
                    ? "w-10 h-10 text-white transition-colors"
                    : "w-10 h-10 text-black transition-colors"
                }
              />
            )}

            <button className="bg-slate-400 p-2 rounded text-white font-bold transition-colors">
              <h2
                className={
                  bombController
                    ? "text-white transition-colors"
                    : "text-black transition-colors"
                }
              >
                La bomba está: {bombController ? "encendida" : "apagada"}
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
            Usuarios conctados: {usersCount / 2}
          </h3>
        </div>
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
