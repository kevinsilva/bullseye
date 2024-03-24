import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import schemas from "./schemas";
import resolvers from "./resolvers";
import { connectToDatabase } from "./db/db";
import { SERVER_PORT } from "./utils/config";

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers: resolvers
});

connectToDatabase()
  .then(() => {
    console.log('Database connected');
})
  .catch((error) => {
    console.error('Error while connecting to database', error);
});

startStandaloneServer(server,
  { listen: { port: SERVER_PORT },
 })
 .then(({ url }) => {
    console.log(`Server ready at: ${url}`);
  })
  .catch((error) => {
    console.error(error);
});