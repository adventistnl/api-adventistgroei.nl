import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdjustmentTaskUpdateManyMutationInput } from './adjustment-task-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AdjustmentTaskWhereInput } from './adjustment-task-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyAdjustmentTaskArgs {

    @Field(() => AdjustmentTaskUpdateManyMutationInput, {nullable:false})
    @Type(() => AdjustmentTaskUpdateManyMutationInput)
    data!: AdjustmentTaskUpdateManyMutationInput;

    @Field(() => AdjustmentTaskWhereInput, {nullable:true})
    @Type(() => AdjustmentTaskWhereInput)
    where?: AdjustmentTaskWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
