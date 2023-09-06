export interface CreateSleepDataDTO {
  sleepTime: string;
  date: string;
  name: string;
}

export interface UpdateSleepDataDTO {
  sleepTime?: string;
  date?: string;
  name?: string;
}

export interface SleepDataDTO {
  id: string;
  sleepTime: string;
  date: string;
  name: string;
}

export interface SleepDataAllPersonsDTO {
  id: string;
  sleepTimeEverson: string;
  sleepTimeGabriel: string;
  sleepTimeHenrique: string;
  sleepTimeDavy: string;
  sleepTimeRobson: string;
  sleepTimeKaiki: string;
  sleepTimeLuiz: string;
  sleepTimeGuilherme: string;
  date: string;
}
