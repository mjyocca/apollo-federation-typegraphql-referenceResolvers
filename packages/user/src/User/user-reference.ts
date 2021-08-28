import type { GraphQLResolveInfo } from 'graphql';
import { User } from './User';
import { userData } from './data';

export const resolveUserReference = async (
  reference: Pick<User, 'id'>, 
  ctx: Record<string, any>,
  info: GraphQLResolveInfo
): Promise<User> => {
  const user = userData.find(({ id }) => reference.id === id);
  return user;
}