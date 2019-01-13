// We keep this here
import "reflect-metadata";

import { GraphQLServer } from "graphql-yoga";

// Basic typeDefinitions
const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`;

//Basic Resolver
const resolvers = {
  Query: {
    hello: () => "Hello World"
  }
};

//Create new GraphQLServer
const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => console.log("Server is running on localhost:4000"));
