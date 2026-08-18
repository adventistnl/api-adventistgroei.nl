import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentWhereInput } from './assignment-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyAssignmentArgs {

    @Field(() => AssignmentWhereInput, {nullable:true})
    @Type(() => AssignmentWhereInput)
    where?: AssignmentWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
