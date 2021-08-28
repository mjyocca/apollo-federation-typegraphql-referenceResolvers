import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';

import { buildFederatedSchema } from '@federation/common';
import { UserResolver } from './User/resolver';
import { resolveUserReference } from './User/user-reference'

(async () => {

    const schema = await buildFederatedSchema(
      {
        resolvers: [UserResolver],
      },
      {
        User: {
          __resolveReference: resolveUserReference
        }
      }
    );

    const server = new ApolloServer({ schema })

    const { url } = await server.listen({ port: 3001 });

    console.log(`user subgraph ready at ${url}`);

})();
