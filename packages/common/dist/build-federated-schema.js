"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFederatedSchema = void 0;
const federation_1 = require("@apollo/federation");
const directives_1 = __importDefault(require("@apollo/federation/dist/directives"));
const apollo_graphql_1 = require("apollo-graphql");
// import { gql } from 'apollo-server';
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const graphql_1 = require("graphql");
const type_graphql_1 = require("type-graphql");
const fs_1 = require("fs");
const buildFederatedSchema = async (options, referenceResolvers) => {
    var _a;
    const schema = await (0, type_graphql_1.buildSchema)({
        ...options,
        directives: [...graphql_1.specifiedDirectives, ...directives_1.default, ...((_a = options.directives) !== null && _a !== void 0 ? _a : [])],
        skipCheck: true,
    });
    const federatedSchema = (0, federation_1.buildSubgraphSchema)({
        typeDefs: (0, graphql_tag_1.default)((0, federation_1.printSchema)(schema)),
        resolvers: (0, type_graphql_1.createResolversMap)(schema),
    });
    if (referenceResolvers) {
        (0, apollo_graphql_1.addResolversToSchema)(federatedSchema, referenceResolvers);
    }
    try {
        (0, fs_1.writeFileSync)('./schema.gql', (0, federation_1.printSchema)(schema));
    }
    catch { }
    return federatedSchema;
};
exports.buildFederatedSchema = buildFederatedSchema;
//# sourceMappingURL=build-federated-schema.js.map