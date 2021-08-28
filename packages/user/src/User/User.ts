import { ObjectType, Field, Directive } from 'type-graphql'

@Directive(`@key(fields: "id")`)
@ObjectType()
export class User {

    @Field()
    id: string;

    @Field()
    username: string;

    @Field()
    name: string;

    @Field()
    birthDate: string;
}
