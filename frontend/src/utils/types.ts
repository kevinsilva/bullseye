import { ApolloError } from '@apollo/client';
import { AutocompleteChangeReason } from '@mui/material';

export type SecurityTypes = {
  id?: number;
  name: string;
  ticker: string;
  sector: string;
  country: string;
  trend?: number;
};

export type DailyTimeSeriesTypes = {
  id?: number;
  date: number;
  closePrice: number;
  volume: string;
};

export type DailyTimeSeriesDataTypes = {
  data: {
    dailyTimeSeries: DailyTimeSeriesTypes[];
  };
};

export type SecurityContextTypes = {
  securityList: SecurityTypes[];
  loading?: boolean;
  error?: ApolloError | undefined;
};

export type SecurityListTableTypes = {
  data: SecurityTypes[];
  handleClick: (securityTicker: string) => void;
};

export type ChildrenTypes = { children: React.ReactNode };

export type HandleSelectTypes = {
  event: React.SyntheticEvent<Element, Event>;
  newValue: string | null;
  reason: AutocompleteChangeReason;
};
