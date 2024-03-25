export type securityArgs = {
  id: number
};

export type dailyTimeSeriesArgs = {
  securityId: number
};

export type seedDataTypes = {
  id: number
  ticker: string
  securityName: string
  sector: string
  country: string
  trend: number
  prices: {
    date: string
    close: string
    volume: string
  }[]
};