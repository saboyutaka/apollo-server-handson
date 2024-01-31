import { ApolloServer } from "apollo-server";
import { readFileSync } from 'fs';
import { resolvers } from './resolvers';

const typeDefs = readFileSync('./src/schema.graphql', { encoding: 'utf-8' });

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
