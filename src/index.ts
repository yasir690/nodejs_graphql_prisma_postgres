import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import todoResolver from './module/todo/todoResolver.js';
import todoSchema from './module/todo/todoSchema.js'


const server = new ApolloServer({
    typeDefs:todoSchema,
    resolvers:todoResolver,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
