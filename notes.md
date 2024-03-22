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