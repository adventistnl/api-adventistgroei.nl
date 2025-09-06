import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageWhereInput } from './direct-message-where.input';

@InputType()
export class DirectMessageScalarRelationFilter {

    @Field(() => DirectMessageWhereInput, {nullable:true})
    is?: DirectMessageWhereInput;

    @Field(() => DirectMessageWhereInput, {nullable:true})
    isNot?: DirectMessageWhereInput;
}
