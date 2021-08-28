import { ObjectType, Field, Root } from 'type-graphql'
import { User } from '../User/User';

@ObjectType()
export class Post {

    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    createdById: string;

    @Field(() => User)
    createdByUser(@Root() data: Post): User {
        return { id: data.createdById }
    }
}