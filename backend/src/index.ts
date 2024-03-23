import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import schemas from "./schemas";
import resolvers from "./resolvers";

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers: resolvers
});

startStandaloneServer(server,
  { listen: { port: 4000 },
 })
 .then(({ url }) => {
    console.log(`Server ready at: ${url}`);
  })
  .catch((error) => {
    console.error(error);
});