import { buildSubgraphSchema, printSchema } from '@apollo/federation';
import federationDirectives from '@apollo/federation/dist/directives';
import type { GraphQLResolverMap } from 'apollo-graphql'
import { addResolversToSchema } from 'apollo-graphql';
import gql from 'graphql-tag';
import { specifiedDirectives } from 'graphql';
import { buildSchema, BuildSchemaOptions, createResolversMap } from 'type-graphql';
import { writeFileSync } from 'fs';

export const buildFederatedSchema = async (
  options: Omit<BuildSchemaOptions, 'skipCheck'>,
  referenceResolvers?: GraphQLResolverMap<any>
) => {
    const schema = await buildSchema({
      ...options,
      directives: [...specifiedDirectives, ...federationDirectives, ...(options.directives ?? [])],
      skipCheck: true,
    });

    const federatedSchema = buildSubgraphSchema({
      typeDefs: gql(printSchema(schema)),
      resolvers: createResolversMap(schema) as any,
    });
    
    if (referenceResolvers) {
      addResolversToSchema(federatedSchema, referenceResolvers);
    }

    try {
     writeFileSync('./schema.gql', printSchema(schema));
    } catch {}

    return federatedSchema;
}