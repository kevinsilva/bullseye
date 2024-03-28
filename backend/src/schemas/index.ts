const typeDefs = `
  scalar Date
  scalar BigInt

  type Security {
    id: ID!
    ticker: String!
    name: String!
    sector: String!
    country: String!
    trend: Float!
    dailyTimeSeries: [DailyTimeSeries]!
  }

  type DailyTimeSeries {
    id: ID!
    date: Date!
    closePrice: Float!
    volume: BigInt!
    securityId: ID!
  }

  type Query {
    securityList: [Security!]!
    securityDetail(id: ID!): Security!
    dailyTimeSeries(securityId: ID!): [DailyTimeSeries]!
  }
`;

export default typeDefs;
