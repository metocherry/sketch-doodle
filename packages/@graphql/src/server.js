import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const port = 4000;

const server = new GraphQLServer({
  typeDefs: "src/graphql/schema.graphql",
  resolvers
});

server.start(({ port }) => console.log(`Graphql Server Running: http://localhost:${port}`));
