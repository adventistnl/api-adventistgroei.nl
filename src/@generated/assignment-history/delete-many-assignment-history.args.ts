import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentHistoryWhereInput } from './assignment-history-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyAssignmentHistoryArgs {

    @Field(() => AssignmentHistoryWhereInput, {nullable:true})
    @Type(() => AssignmentHistoryWhereInput)
    where?: AssignmentHistoryWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
