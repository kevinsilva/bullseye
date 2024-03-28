import { gql } from '@apollo/client';

export const ALL_SECURITIES = gql`
  query SecurityList {
    securityList {
      id
      name
      ticker
      sector
      country
      trend
    }
  }
`;

export const GET_SECURITY_DETAIL = gql`
  query SecurityDetail($id: ID!) {
    securityDetail(id: $id) {
      name
      ticker
      sector
      country
      dailyTimeSeries {
        id
        date
        closePrice
        volume
      }
    }
  }
`;

export const GET_DAILY_TIME_SERIES = gql`
  query DailyTimeSeries($securityId: ID!) {
    dailyTimeSeries(securityId: $securityId) {
      id
      date
      closePrice
      volume
    }
  }
`;
