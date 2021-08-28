import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';

import { buildFederatedSchema } from '@federation/common';
import { PostResolver } from './Post/resolver';
import UserPostsResolver from './User/resolver';

(async () => {

  const schema = await buildFederatedSchema(
    {
      resolvers: [PostResolver, UserPostsResolver]
    }
  );

  const server = new ApolloServer({ schema });

  const { url } = await server.listen({ port: 3003 })

  console.log(`Post subgraph ready at ${url}`);

})();