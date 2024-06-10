import Chart from "react-apexcharts";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useBomb } from "../../context/BombContext";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

export const CakeChart = () => {
  const { bombController } = useBomb();
  const data = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        type: "pie",
        height: 350,
      },
      labels: [
        "Jimenez Martha",
        "Santillan Dante",
        "María García",
        "Antonio Martínez",
        "Laura Sánchez",
      ],
      legend: {
        position: "bottom",
      },
      dataLabels: {
        enabled: true,
        formatter: (val, opts) => {
          return (
            opts.w.globals.labels[opts.seriesIndex] +
            ": " +
            val.toFixed(1) +
            "%"
          );
        },
      },
      tooltip: {
        y: {
          formatter: (val) => `${val} %`,
        },
      },
      fill: {
        colors: ["#277fff", "#50a4ff", "#88c5ff", "#b8dbff", "#d7e9ff"],
      },
    },
  };

  return (
    <Card className="rounded-lg transition-colors backdrop-blur-lg bg-white/10">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center transition-colors"
      >
        <div
          className={
            bombController
              ? "w-max rounded-lg border-white border p-5 text-white transition-colors"
              : "w-max rounded-lg border-black border p-5 text-black transition-colors"
          }
        >
          <Square3Stack3DIcon
            className={
              bombController
                ? "text-white h-6 w-6 transition-colors"
                : "text-black h-6 w-6 transition-colors"
            }
          />
        </div>
        <div>
          <Typography
            variant="h6"
            className={
              bombController
                ? "text-white transition-colors"
                : "text-black transition-colors"
            }
          >
            Presion
          </Typography>
          <Typography
            variant="small"
            className={
              bombController
                ? "text-white transition-colors"
                : "text-black transition-colors"
            }
          >
            Grafica de los usuarios que han prendido la bomba el ultimo mes
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <Chart
          options={data.options}
          series={data.series}
          type="pie"
          height={350}
          className="!text-white transition-colors"
        />
      </CardBody>
    </Card>
  );
};
