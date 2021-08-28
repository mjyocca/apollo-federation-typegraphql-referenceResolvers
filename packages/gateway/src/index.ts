import 'reflect-metadata';
import { ApolloGateway } from '@apollo/gateway';
import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

const main = async () => {

  const gateway = new ApolloGateway({
    serviceList: [
      { name: 'user', url: 'http://localhost:3001' },
      { name: 'post', url: 'http://localhost:3003' }
    ]
  })

  const server = new ApolloServer({
    gateway,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
  });

  const { url } = await server.listen({ port: 4000 })

  console.log(`Apollo Gateway ready at ${url}`)
}


main().catch(console.error)