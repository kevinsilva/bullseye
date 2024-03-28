## Backend
Create a Node.js/Typescript GraphQL or REST API backed by a PostgreSQL instance that exposes the following data:

- Security List - an endpoint providing a list of available securities (companies) with some overview data
- Security Detail - an endpoint providing all the fields related to a Security (company) including daily time-series values (close price, volume)

*Note*:
The source of the data served by the API should always be PostgreSQL
Use the attached data.json file as seed data for the PostgreSQL database

### Setup

- Node
- TypeScript
- PostgreSQL
- Sequelize (ORM) - to create models
- Apollo Server - no authentication needed
- dotenv

1 - Start with setting up Node/TypeScript and Database
2 - Create models for Database and establish relationships
3 - Seed data to Database
4 - For the API, implement queries and resolvers
5 - Error, Validation, Testing

#### Database

name: bullseyedb
tables: securities security_prices (1-N)

Securities
id: primary key
ticker: string varchar(50)
name: string varchar(100)
sector: string varchar(50)
country: string varchar(50)
trend: int - numeric(5,2)

Security Prices
id: primary key
securityId: foreign key
date: date
close: numeric(10,4)
volume: bigint

#### GraphQL Schema

**problem:** graphql does not support bigint and date.

Use GraphQLScalarType object with these methods:

- serialize: converts the back-end representation to JSON compatible format.
- parseValue: converts the JSON to its back-end representation.
- parseLiteral: converts hard-coded arguments on incoming query from AST to the scalar back-end.

Together, these methods describe how Apollo Server interacts with the scalar in every scenario.

#### SeedDB

- read data in json file.
- loop through data
- create entry for each table

## Frontend

Use Material UI (https://material-ui.com/) and Highcharts (https://github.com/highcharts/highcharts-react / https://www.highcharts.com/)
Create a React.js Single Page Application application with 2 screens:
- Security List
  - a list of all securities provided in data.json displayed in a table with clickable rows
  - path:
    - /
    - /securities
  - Table fields:
    - symbol/ticker
    - name
    - sector
    - country
    - trend
    - Background
        -100,-20: Red
        -20, 20: Green
        20-100: Blue

- Security Detail
  - a detail of a Security displayed after clicking on a row in the Security List screen
  - path:
    - /securities/:symbol
  - Detail fields
    - Symbol
    - Name
    - Country
    - Sector
  - Chart fields
    - close (price)
    - volume
    - date

### Setup

- React
- TypeScript
- Apollo Client
- Material UI
- Highcharts

