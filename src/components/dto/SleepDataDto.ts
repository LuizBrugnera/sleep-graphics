export interface CreateSleepDataDTO {
  sleepTime: string;
  date: string;
  name: string;
  password: string;
}

export interface UpdateSleepDataDTO {
  sleepTime?: string;
  date?: string;
  name?: string;
  password: string;
}

export interface SleepDataDTO {
  _id: string;
  sleepTime: string;
  date: string;
  name: string;
}

export interface SleepDataAllPersonsDTO {
  _id: string;
  [key: string]: string | number;
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
