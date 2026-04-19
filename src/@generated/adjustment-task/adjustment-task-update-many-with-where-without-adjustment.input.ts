import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdjustmentTaskScalarWhereInput } from './adjustment-task-scalar-where.input';
import { Type } from 'class-transformer';
import { AdjustmentTaskUpdateManyMutationInput } from './adjustment-task-update-many-mutation.input';

@InputType()
export class AdjustmentTaskUpdateManyWithWhereWithoutAdjustmentInput {

    @Field(() => AdjustmentTaskScalarWhereInput, {nullable:false})
    @Type(() => AdjustmentTaskScalarWhereInput)
    where!: AdjustmentTaskScalarWhereInput;

    @Field(() => AdjustmentTaskUpdateManyMutationInput, {nullable:false})
    @Type(() => AdjustmentTaskUpdateManyMutationInput)
    data!: AdjustmentTaskUpdateManyMutationInput;
}
