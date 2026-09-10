import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentWhereInput } from './assignment-where.input';

@InputType()
export class AssignmentListRelationFilter {

    @Field(() => AssignmentWhereInput, {nullable:true})
    every?: AssignmentWhereInput;

    @Field(() => AssignmentWhereInput, {nullable:true})
    some?: AssignmentWhereInput;

    @Field(() => AssignmentWhereInput, {nullable:true})
    none?: AssignmentWhereInput;
}
