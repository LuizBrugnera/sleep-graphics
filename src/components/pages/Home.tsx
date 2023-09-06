import { useEffect, useState } from "react";
import { SleepDataAllPersonsDTO } from "../dto/SleepDataDto";
import * as S from "../../styles";
//import FormAddSleepData from "../FormAddSleepData";
import SleepTimeLineChart from "../SleepTimeLineChart";
import FormAddSleepData from "../FormAddSleepData";
import { SleepDataService } from "../services/SleepDataService";

const Home = () => {
  const [sleepData, setSleepData] = useState([] as SleepDataAllPersonsDTO[]);

  useEffect(() => {
    const getSleepData = async () => {
      const sleepData = await SleepDataService.getGroupedSleepData();
      if (sleepData) {
        setSleepData(sleepData);
      }
    };

    getSleepData();
  }, []);
  return (
    <div>
      <S.MainContainer>
        <S.LineGraphContainer>
          <SleepTimeLineChart sleepData={sleepData} />
        </S.LineGraphContainer>
        <FormAddSleepData setSleepData={setSleepData} />
        <S.Footer></S.Footer>
      </S.MainContainer>
    </div>
  );
};

export default Home;
