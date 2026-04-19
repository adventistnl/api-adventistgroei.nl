import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdjustmentTaskWhereUniqueInput } from './adjustment-task-where-unique.input';
import { Type } from 'class-transformer';
import { AdjustmentTaskCreateInput } from './adjustment-task-create.input';
import { AdjustmentTaskUpdateInput } from './adjustment-task-update.input';

@ArgsType()
export class UpsertOneAdjustmentTaskArgs {

    @Field(() => AdjustmentTaskWhereUniqueInput, {nullable:false})
    @Type(() => AdjustmentTaskWhereUniqueInput)
    where!: Prisma.AtLeast<AdjustmentTaskWhereUniqueInput, 'id'>;

    @Field(() => AdjustmentTaskCreateInput, {nullable:false})
    @Type(() => AdjustmentTaskCreateInput)
    create!: AdjustmentTaskCreateInput;

    @Field(() => AdjustmentTaskUpdateInput, {nullable:false})
    @Type(() => AdjustmentTaskUpdateInput)
    update!: AdjustmentTaskUpdateInput;
}
