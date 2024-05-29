import Chart from "react-apexcharts";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { useBomb } from "../../context/BombContext";

const RadarChart = () => {
  const { bombController } = useBomb();
  const options = {
    chart: {
      type: "radar",
      background: "transparent",
    },

    xaxis: {
      categories: ["Sensor A", "Sensor B", "Sensor C", "Sensor D", "Sensor E"],
      labels: {
        style: {
          colors: ["#fff", "#fff", "#fff", "#fff", "#fff"],
          fontSize: "14px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: ["#fff"],
          fontSize: "14px",
        },
      },
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: "#e9e9e9",
          strokeWidth: 1,
          connectorColors: "#e9e9e9",
          fill: {
            colors: ["#f8f8f8", "#fff"],
          },
        },
      },
    },
    colors: ["#50a4ff", "#105dff"],
    stroke: {
      width: 1,
    },
  };

  const series = [
    {
      name: "Nivel de Agua en Abril",
      data: [100, 120, 130, 140, 150, 170, 190, 200, 230],
    },
    {
      name: "Nivel de Agua en Mayo",
      data: [300, 320, 340, 360, 400, 420, 440, 450, 500],
    },
  ];

  return (
    <Card className="rounded-lg transition-colors backdrop-blur-lg bg-white/10">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div
          className={
            bombController
              ? "w-max rounded-lg border-white border p-5 text-white"
              : "w-max rounded-lg border-black border p-5 text-black"
          }
        >
          <Square3Stack3DIcon className="h-6 w-6" />
        </div>
        <div>
          <Typography
            variant="h6"
            className={bombController ? "text-white" : "text-black"}
          >
            Niveles de agua
          </Typography>
          <Typography
            variant="small"
            className={
              bombController
                ? "max-w-sm font-normal text-white"
                : "max-w-sm font-normal text-black"
            }
          >
            Grafica que muestra los niveles del agua en los ultimos dos meses
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <Chart
          options={options}
          series={series}
          type="radar"
          height={350}
          className={bombController ? " text-white" : "border-black text-black"}
        />
      </CardBody>
    </Card>
  );
};

export default RadarChart;
