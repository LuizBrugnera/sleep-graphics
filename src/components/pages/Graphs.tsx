import { useEffect, useState } from "react";
import { SleepDataService } from "../services/SleepDataService";
import { SleepDataAllPersonsDTO } from "../dto/SleepDataDto";
import * as S from "../../styles";
import { SleepTimeBarChart } from "../SleepTimeBarChart";
import SleepTimeLineChart from "../SleepTimeLineChart";

const Graphs = () => {
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
    <S.MainContainer paddingTop={"30px"}>
      <S.VerticalContainer>
        <S.Title>Graficos</S.Title>
        <S.SubTitle>O Grafico de sono</S.SubTitle>
      </S.VerticalContainer>
      <SleepTimeLineChart sleepData={sleepData} />
      <S.SubTitle>Horas totais dormidas</S.SubTitle>
      <SleepTimeBarChart sleepData={sleepData} type="all" />
      <S.SubTitle>Media de horas dormidas por dia</S.SubTitle>
      <SleepTimeBarChart sleepData={sleepData} type="average" />
      <S.Footer></S.Footer>
    </S.MainContainer>
  );
};

export default Graphs;
