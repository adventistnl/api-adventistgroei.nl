import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunicationWhereInput } from './communication-where.input';

@InputType()
export class CommunicationListRelationFilter {

    @Field(() => CommunicationWhereInput, {nullable:true})
    every?: CommunicationWhereInput;

    @Field(() => CommunicationWhereInput, {nullable:true})
    some?: CommunicationWhereInput;

    @Field(() => CommunicationWhereInput, {nullable:true})
    none?: CommunicationWhereInput;
}
