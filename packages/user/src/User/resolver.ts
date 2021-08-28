import { Query, Resolver } from "type-graphql";
import { User } from './User';
import { userData } from "./data";

@Resolver(() => User)
export class UserResolver {

    @Query(() => User)
    async user(): Promise<User> {
        return userData[0];
    }
}