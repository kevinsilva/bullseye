<p align="center"><img src="./frontend/src/assets/logo_black.svg" width="100"></p>
<p align="center"><strong ><span style="font-size: 36px;">Bullseye</span></strong></p>
<div align="center">

</div>

# Bullseye

A full-stack web application that provides financial data.

Bullseye is a react-based application that provides data about securities, including details such as a chart field based on close price, volume and date.

## Implementation Details

This project is a financial data system with both back-end and front-end components. The back-end handles data storage and retrieval of data while the front-end provides a simple user interface for interaction. The back-end is built on top of a [PostgreSQL](https://www.postgresql.org/) database, using [Apollo Server](https://www.apollographql.com/) and [Prisma](https://www.prisma.io/) for [GraphQL](https://graphql.org/)-based API development and data management. The front-end is built using [React](https://react.dev/), [Material UI](https://mui.com/) and [Highcharts](https://www.highcharts.com/). [TypeScript](https://www.typescriptlang.org/) is used both on back-end and front-end for type safety and robustness of code.

## Back-end

The back-end server exposes GraphQL API endpoint for querying data. Considering the GraphQL nature of the project, the structure is based on the following components:

 **Schemas**

Defines the GraphQL schema for the back-end API, including and object type Security**, an object type DailyTimesSeries, and an object type Query for the root queries.

The type Security represents the security entity with overview data including the `id`, `ticker` (symbol), `name`, `sector`, `country` and `trend`. It also establishes a one-to-many association with an array of DailyTimeSeries.

The type DailyTimeSeries represents the prices for a given security. It has fields `id`, `date`, `closePrice`, `volume` and `securityId` as the foreign key, establishing the association with type Security.

The type Query includes three queries:
- `securityList`: fetches a list of all securities.
- `securityDetail(id)`: fetches all details for a specific security.
- `dailyTimeSeries(securityId):`: fetches daily time series for a specific security.

 **Resolvers**

Contains the resolver functions for handling GraphQL queries, including Custom Scalar Resolvers and Query Resolvers.

The Custom Scalar Resolvers assign custom scalars to include `Date` and `BigInt` scalar types.

> **! Note**:
> Date and BigInt are not included out of the box on Apollo Server.

The Query Resolvers includes three resolver functions for the querys `securityList`, `securityDetail` and `dailyTimeSeries` for retrieving data from database using Prisma.

 **Scalars**

Custom scalar types were created for non natively supported types `Date` and `BigInt`. They resort to the GraphQLScalarType object with these associated methods:

- `serialize`: converts the back-end representation to JSON compatible format.
- `parseValue`: converts the JSON to its back-end representation.
- `parseLiteral`: converts hard-coded arguments on incoming query from AST to the scalar back-end.

Together, these methods describe how Apollo Server interacts with the custom scalar in every scenario.

 **Database**

Defines the database schema using Prisma's syntax and initializes client.

The database is populated with initial data from a JSON file `data.json`. The main function in *db/seed.ts* uses the utility function `seedDatabase` to iterate through each security and prices object and create new instances using the method create from Prisma.

**Database Schema**

```Js
// db/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Security {
  id Int @id @default(autoincrement())
  ticker String
  name String
  sector String
  country String
  trend Float
  dailyTimeSeries DailyTimeSeries[]
}

model DailyTimeSeries {
  id Int @id @default(autoincrement())
  date DateTime
  closePrice Float
  volume BigInt
  security Security @relation(fields: [securityId], references: [id])
  securityId Int
}
```

## Front-End

The front-end provides a user-friendly interface for viewing and interacting with data. Users can navigate, filter securities and view detail charts and detail for individual securities.

The project is structured into several components inherent to the application features:

- **SecurityList**: Gets data from context and handles navigation logic. It also renders SecurityListTable.
- **SecurityListTable**: Displays a table of securities and view logic.
- **SecurityDetail**: Gets data from custom hook and renders navigation, SecurityInfo and SecurityChart.
- **SecurityInfo**: Renders details about a specific security.
- **SecurityChart**: Renders a chart showing daily time series data for a given security
- **Navigation**: Component for navigating to home and filter securities. It renders the BackButton and the FilterTicker.


**Context**

Provides context for managing data related to all securities. Data is fetched once and shared throughout the application.

**GraphQL**

It configures and initializes Apollo Client for making GraphQL requests to back-end server. It also contains the following list of queries used by the frontend components to fetch data:

- `ALL_SECURITIES`
- `GET_SECURITY_DETAIL`
- `GET_DAILY_TIME_SERIES`

**Hooks**

Custom hook for fetching detailed information about a security based on its ticker symbol. It leverages context data to get the id of a specific security and fetches daily time series data (prices) to generate the chart.

## Development

To install clone repository, change into directory on the terminal.

```bash
git clone https://github.com/kevinsilva/bullseye
cd bullseye
```

### Back-End

Navigate to backend directory and install dependencies.

```bash
cd backend
npm install
```

#### Configuration

Ensure that a PostgreSQL database is available and the connection URL is set in the `.env` file.

#### Running the Server

To run the server

```bash
  cd backend
  npm run dev
```

To seed the database

```bash
npm run seedDB
```


### Front-End

Navigate to frontend directory and install dependencies.

```bash
cd frontend
npm install
```

#### Configuration

Ensure that the backend server is running and accessible at `http://localhost:4000/`.

#### Running the Application

Navigate to frontend directory and start server.

```bash
  cd frontend
  npm run dev
```

## License

[MIT](https://choosealicense.com/licenses/mit/)