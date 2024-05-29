import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { useBomb } from "../../context/BombContext";

export default function LineChart() {
  const { bombController } = useBomb();
  const chartConfig = {
    type: "line",
    height: 240,
    series: [
      {
        name: "Presion",
        data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "Presion",
      },
      dataLabels: {
        enabled: false,
      },
      colors: bombController ? ["#ddd"] : ["#000"],
      stroke: {
        lineCap: "round",
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: bombController ? "#ddd" : "#000",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "1 In",
          "2 In",
          "3 In",
          "4 In",
          "5 In",
          "6 In",
          "7 In",
          "9 In",
          "10 In",
          "11 In",
          "12 In",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: bombController ? "#ddd" : "#000",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };

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
            Presion
          </Typography>
          <Typography
            variant="small"
            className={
              bombController
                ? "max-w-sm font-normal text-white"
                : "max-w-sm font-normal text-black"
            }
          >
            Grafica de la presion por pulgada, en x las pulgadas y en Y la
            presion
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
}
