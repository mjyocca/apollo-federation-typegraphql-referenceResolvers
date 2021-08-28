import { Query, Resolver, Arg } from "type-graphql";
import { Post } from "./Post";
import { postData } from './data'

@Resolver(() => Post)
export class PostResolver {

    @Query(() => Post)
    async Post (@Arg('id') id: string): Promise<Post> {
        return postData.find((post) => post.id === id)
    }

    @Query(() => [Post])
    async Posts (): Promise<Post[]> {
        return postData;
    }
}