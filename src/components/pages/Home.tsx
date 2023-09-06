import { useEffect, useState } from "react";
import { SleepDataAllPersonsDTO } from "../dto/SleepDataDto";
import * as S from "../../styles";
//import FormAddSleepData from "../FormAddSleepData";
import SleepTimeLineChart from "../SleepTimeLineChart";
import FormAddSleepData from "../FormAddSleepData";

const Home = () => {
  const [sleepData, setSleepData] = useState([] as SleepDataAllPersonsDTO[]);

  useEffect(() => {
    setSleepData([
      {
        id: "1",
        date: "2021-01-01",
        sleepTimeEverson: "7",
        sleepTimeGabriel: "6",
        sleepTimeHenrique: "8",
        sleepTimeDavy: "6.5",
        sleepTimeRobson: "7.5",
        sleepTimeKaiki: "8",
        sleepTimeLuiz: "6.5",
        sleepTimeGuilherme: "7",
      },
      {
        id: "2",
        date: "2021-01-02",
        sleepTimeEverson: "7.5",
        sleepTimeGabriel: "6.5",
        sleepTimeHenrique: "8",
        sleepTimeDavy: "6",
        sleepTimeRobson: "7",
        sleepTimeKaiki: "8.5",
        sleepTimeLuiz: "7",
        sleepTimeGuilherme: "6.5",
      },
      {
        id: "3",
        date: "2021-01-03",
        sleepTimeEverson: "8",
        sleepTimeGabriel: "7",
        sleepTimeHenrique: "7.5",
        sleepTimeDavy: "6.5",
        sleepTimeRobson: "7",
        sleepTimeKaiki: "8",
        sleepTimeLuiz: "7.5",
        sleepTimeGuilherme: "7",
      },
      {
        id: "4",
        date: "2021-01-04",
        sleepTimeEverson: "7",
        sleepTimeGabriel: "6.5",
        sleepTimeHenrique: "8",
        sleepTimeDavy: "7",
        sleepTimeRobson: "7.5",
        sleepTimeKaiki: "8.5",
        sleepTimeLuiz: "6.5",
        sleepTimeGuilherme: "7.5",
      },
    ]);
  }, []);
  return (
    <div>
      <S.HomeContainer>
        <S.LineGraphContainer>
          <SleepTimeLineChart sleepData={sleepData} />
        </S.LineGraphContainer>
        <FormAddSleepData setSleepData={setSleepData} />
      </S.HomeContainer>
    </div>
  );
};

export default Home;
