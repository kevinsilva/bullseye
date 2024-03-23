const typeDefs = `
  type Security {
    id: ID!
    ticker: String!
    securityName: String!
    sector: String!
    country: String!
    trend: Float!
    prices: [Price]!
  }

  type Price {
    id: ID!
    date: Date!
    close: Float!
    volume: BigInt!
    securityId: ID!
  }

  type Query {
    securities: [Security!]!
    security(id: ID!): Security
    prices(securityId: ID!): [Price]!
  }
`;

export default typeDefs;