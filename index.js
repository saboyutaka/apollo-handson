const fs = require('fs');
const { join } = require('path');
const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql(fs.readFileSync(join(__dirname, 'schema.graphql'), 'utf8'));
const resolvers = require('./resolvers')
const PrismaAPI = require('./datasources/prisma')

const server = new ApolloServer({
  typeDefs, resolvers, dataSources: () => ({
    prisma: new PrismaAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
