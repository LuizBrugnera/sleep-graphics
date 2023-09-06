import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { SleepDataAllPersonsDTO } from "./dto/SleepDataDto";
import { useEffect, useState } from "react";

interface SleepTimeLineChartProps {
  sleepData: SleepDataAllPersonsDTO[];
}

const SleepTimeLineChart = ({ sleepData }: SleepTimeLineChartProps) => {
  const [maxValue, setMaxValue] = useState(0);

  const getMaxValue = (data: SleepDataAllPersonsDTO[]) => {
    let max = 0;
    data.forEach((item) => {
      Object.keys(item).forEach((key) => {
        if (key.startsWith("sleepTime")) {
          const sleepTime = Number(item[key as keyof SleepDataAllPersonsDTO]);
          if (sleepTime > max) {
            max = sleepTime;
          }
        }
      });
    });
    return max;
  };

  useEffect(() => {
    setMaxValue(getMaxValue(sleepData));
  }, [sleepData]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={sleepData}
        margin={{
          top: 5,
          right: 50,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis dataKey="date" />
        <YAxis domain={[0, maxValue + 1]} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="sleepTimeGabriel"
          name="Gabriel"
          stroke="#8884d8"
        />
        <Line
          type="monotone"
          dataKey="sleepTimeEverson"
          name="Everson"
          stroke="#c06565"
        />
        <Line
          type="monotone"
          dataKey="sleepTimeHenrique"
          name="Henrique"
          stroke="#c0c065"
        />
        <Line
          type="monotone"
          dataKey="sleepTimeDavy"
          name="Davy"
          stroke="#65c0c0"
        />
        <Line
          type="monotone"
          dataKey="sleepTimeRobson"
          name="Robson"
          stroke="#65c065"
        />
        <Line
          type="monotone"
          dataKey="sleepTimeKaiki"
          name="Kaiki"
          stroke="#c065c0"
        />
        <Line
          type="monotone"
          dataKey="sleepTimeLuiz"
          name="Luiz"
          stroke="#c06565"
        />
        <Line
          type="monotone"
          dataKey="sleepTimeGuilherme"
          name="Guilherme"
          stroke="#65c0c0"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SleepTimeLineChart;
