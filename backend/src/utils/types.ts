export type securityArgs = {
  id: number;
};

export type dailyTimeSeriesArgs = {
  securityId: number;
};

export type seedDataTypes = {
  id: number;
  ticker: string;
  securityName: string;
  sector: string;
  country: string;
  trend: number;
  prices: {
    date: string;
    close: string;
    volume: string;
  }[];
};

export type SecurityTypes = {
  id: number;
  ticker: string;
  name: string;
  sector: string;
  country: string;
  trend: number;
};

export type DailyTimeSeriesTypes = {
  id: number;
  date: Date;
  closePrice: number;
  volume: bigint;
  securityId?: number;
};
