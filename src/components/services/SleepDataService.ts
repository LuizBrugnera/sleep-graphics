import axios from "axios";
import {
  CreateSleepDataDTO,
  SleepDataAllPersonsDTO,
  SleepDataDTO,
  UpdateSleepDataDTO,
} from "../dto/SleepDataDto";

export const SleepDataService = {
  create: async (
    data: CreateSleepDataDTO
  ): Promise<SleepDataDTO | undefined> => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/sleepdata`,
        data
      );

      const sleepData: SleepDataDTO = {
        _id: response.data.id,
        date: response.data.date,
        sleepTime: response.data.sleepTime,
        name: response.data.name,
      };

      return sleepData;
    } catch (error) {
      console.error("Erro to create SleepData", error);
    }
  },

  getAll: async (): Promise<SleepDataDTO[] | undefined> => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/sleepdata`
      );

      const sleepDataList: SleepDataDTO[] = response.data.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (sleepData: any) => {
          return {
            id: sleepData.id,
            date: sleepData.date,
            sleepTime: sleepData.sleepTime,
          };
        }
      );

      return sleepDataList;
    } catch (error) {
      console.error("Erro to get sleepdata", error);
    }
  },

  getOne: async (id: string): Promise<SleepDataDTO | undefined> => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/sleepdata/${id}`
      );

      const sleepData: SleepDataDTO = {
        _id: response.data.id,
        date: response.data.date,
        sleepTime: response.data.sleepTime,
        name: response.data.name,
      };

      return sleepData;
    } catch (error) {
      console.error("Erro to get one sleepdata", error);
    }
  },

  update: async (
    id: string,
    data: UpdateSleepDataDTO
  ): Promise<SleepDataDTO | undefined> => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/sleepdata/${id}`,
        data
      );

      const sleepData: SleepDataDTO = {
        _id: response.data.id,
        date: response.data.date,
        sleepTime: response.data.sleepTime,
        name: response.data.name,
      };

      return sleepData;
    } catch (error) {
      console.error("Erro to update post", error);
    }
  },

  delete: async (id: string): Promise<boolean | undefined> => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/sleepdata/${id}`
      );

      return response.status === 200 ? true : false;
    } catch (error) {
      console.error("Erro ao deletar post", error);
    }
  },

  getGroupedSleepData: async (): Promise<
    SleepDataAllPersonsDTO[] | undefined
  > => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/sleepdata/grouped`
      );

      const sleepDataList: SleepDataAllPersonsDTO[] =
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        response.data.map((sleepData: any) => {
          return {
            id: sleepData.id,
            date: sleepData.date,
            sleepTimeEverson: sleepData.sleepTimeEverson,
            sleepTimeGabriel: sleepData.sleepTimeGabriel,
            sleepTimeHenrique: sleepData.sleepTimeHenrique,
            sleepTimeDavy: sleepData.sleepTimeDavy,
            sleepTimeRobson: sleepData.sleepTimeRobson,
            sleepTimeKaiki: sleepData.sleepTimeKaiki,
            sleepTimeLuiz: sleepData.sleepTimeLuiz,
            sleepTimeGuilherme: sleepData.sleepTimeGuilherme,
          };
        });

      return sleepDataList;
    } catch (error) {
      console.error("Erro to get grouped sleepdata", error);
    }
  },
};
