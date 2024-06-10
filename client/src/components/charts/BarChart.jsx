import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { useBomb } from "../../context/BombContext";

export default function BarChart() {
  const { bombController } = useBomb();
  const chartConfig = {
    type: "bar",
    height: 240,
    series: [
      {
        name: "Litros",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: bombController ? ["#ddd"] : ["#000"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 2,
        },
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
          "Sept",
          "Oct",
          "Nov",
          "Dic",
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
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
    <Card className="rounded-lg backdrop-blur-lg bg-white/10 transition-colors">
      <CardHeader
        floated={false}
        shadow={false}
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center !bg-transparent transition-colors"
      >
        <div
          className={
            bombController
              ? "w-max rounded-lg border border-white p-5 text-white transition-colors"
              : "w-max rounded-lg border-black border p-5 text-white transition-colors"
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
            Litros por mes
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className={
              bombController
                ? "text-white transition-colors"
                : "text-black transition-colors"
            }
          >
            Cantidad de litros bombeados por mes
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0 transition-colors">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
}
