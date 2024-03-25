import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import schemas from "./schemas";
import resolvers from "./resolvers";
import { SERVER_PORT } from "./utils/config";

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers: resolvers
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

