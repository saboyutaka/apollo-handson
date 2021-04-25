const { ApolloServer } = require('apollo-server');
const { loadSchemaSync } = require('@graphql-tools/load');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');

const schema = loadSchemaSync('./schema.graphql', { loaders: [new GraphQLFileLoader()] });
const resolvers = require('./resolvers')
const PrismaAPI = require('./datasources/prisma')

const server = new ApolloServer({
  schema, resolvers, dataSources: () => ({
    prisma: new PrismaAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
