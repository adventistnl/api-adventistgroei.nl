import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunicationWhereInput } from './communication-where.input';

@InputType()
export class CommunicationScalarRelationFilter {

    @Field(() => CommunicationWhereInput, {nullable:true})
    is?: CommunicationWhereInput;

    @Field(() => CommunicationWhereInput, {nullable:true})
    isNot?: CommunicationWhereInput;
}
