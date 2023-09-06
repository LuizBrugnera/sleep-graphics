import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { SleepDataAllPersonsDTO } from "./dto/SleepDataDto";

interface SleepBarChartProps {
  sleepData: SleepDataAllPersonsDTO[];
}

export function SleepTimeBarChart({ sleepData }: SleepBarChartProps) {
  const totalSleep = () => {
    const sleepTimes = [
      "sleepTimeEverson",
      "sleepTimeGabriel",
      "sleepTimeHenrique",
      "sleepTimeDavy",
      "sleepTimeRobson",
      "sleepTimeKaiki",
      "sleepTimeLuiz",
      "sleepTimeGuilherme",
    ];

    const totalSleep = sleepTimes.map((name) => {
      const total = sleepData.reduce(
        (acc, item) => acc + parseFloat(item[name] as string),
        0
      );
      return { name: name.replace("sleepTime", ""), total };
    });

    totalSleep.sort((a, b) => b.total - a.total);
    return totalSleep;
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={totalSleep()}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
