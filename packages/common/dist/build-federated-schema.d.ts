import type { GraphQLResolverMap } from 'apollo-graphql';
import { BuildSchemaOptions } from 'type-graphql';
export declare const buildFederatedSchema: (options: Omit<BuildSchemaOptions, 'skipCheck'>, referenceResolvers?: GraphQLResolverMap<any>) => Promise<import("graphql").GraphQLSchema>;
