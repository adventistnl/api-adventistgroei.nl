import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentRequestWhereInput } from './assignment-request-where.input';

@InputType()
export class AssignmentRequestListRelationFilter {

    @Field(() => AssignmentRequestWhereInput, {nullable:true})
    every?: AssignmentRequestWhereInput;

    @Field(() => AssignmentRequestWhereInput, {nullable:true})
    some?: AssignmentRequestWhereInput;

    @Field(() => AssignmentRequestWhereInput, {nullable:true})
    none?: AssignmentRequestWhereInput;
}
