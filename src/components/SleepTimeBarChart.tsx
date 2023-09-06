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
  type: "all" | "average";
}

export function SleepTimeBarChart({ sleepData, type }: SleepBarChartProps) {
  const allSleep = () => {
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

    const allSleep = sleepTimes.map((name) => {
      const all = sleepData.reduce(
        (acc, item) => acc + parseFloat(item[name] as string),
        0
      );
      return { name: name.replace("sleepTime", ""), all };
    });

    allSleep.push({
      name: "Humano",
      all: 8 * sleepData.length,
    });

    allSleep.sort((a, b) => b.all - a.all);
    return allSleep;
  };

  const sleepAverage = () => {
    const all = allSleep();

    const average = all.map((item) => {
      const average = item.all / sleepData.length;
      return { name: item.name, average };
    });

    return average;
  };

  return type === "all" ? (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={allSleep()}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="all" fill="#4c46c4" name="Total" />
      </BarChart>
    </ResponsiveContainer>
  ) : (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={sleepAverage()}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="average" fill="#be3a3a" name="Média" />
      </BarChart>
    </ResponsiveContainer>
  );
}
