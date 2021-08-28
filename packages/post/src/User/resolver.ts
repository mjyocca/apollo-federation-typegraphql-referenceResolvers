import { Resolver, FieldResolver, Root } from "type-graphql";

import { User } from './User';
import { Post } from '../Post/Post';
import { postData } from "../Post/data";

@Resolver(() => User)
export default class UserPostsResolver {

    @FieldResolver(() => [Post])
    async posts(@Root() user: User): Promise<Post[]> {
        return postData.filter(post => post.createdById === user.id)
    }
}