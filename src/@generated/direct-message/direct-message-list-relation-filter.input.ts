import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageWhereInput } from './direct-message-where.input';

@InputType()
export class DirectMessageListRelationFilter {

    @Field(() => DirectMessageWhereInput, {nullable:true})
    every?: DirectMessageWhereInput;

    @Field(() => DirectMessageWhereInput, {nullable:true})
    some?: DirectMessageWhereInput;

    @Field(() => DirectMessageWhereInput, {nullable:true})
    none?: DirectMessageWhereInput;
}
