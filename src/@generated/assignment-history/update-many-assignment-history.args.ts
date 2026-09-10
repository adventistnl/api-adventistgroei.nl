import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentHistoryUpdateManyMutationInput } from './assignment-history-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AssignmentHistoryWhereInput } from './assignment-history-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyAssignmentHistoryArgs {

    @Field(() => AssignmentHistoryUpdateManyMutationInput, {nullable:false})
    @Type(() => AssignmentHistoryUpdateManyMutationInput)
    data!: AssignmentHistoryUpdateManyMutationInput;

    @Field(() => AssignmentHistoryWhereInput, {nullable:true})
    @Type(() => AssignmentHistoryWhereInput)
    where?: AssignmentHistoryWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
