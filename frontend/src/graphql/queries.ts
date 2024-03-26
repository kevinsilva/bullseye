import { gql } from '@apollo/client'

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
`

export const GET_SECURITY = gql`
  query getSecurityDetail($id: ID!) {
    securityDetail(id: $id) {
      id
      name
      symbol
      sector
      country
      trend
      dailyTimeSeries {
        id
        date
        price
        volume
      }
    }
  }
`

export const GET_DAILY_TIME_SERIES = gql`
  query getDailyTimeSeries($id: ID!) {
    dailyTimeSeries(id: $id) {
      id
      date
      price
      volume
    }
  }
`