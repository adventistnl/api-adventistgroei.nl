import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdjustmentTaskUpdateInput } from './adjustment-task-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AdjustmentTaskWhereUniqueInput } from './adjustment-task-where-unique.input';

@ArgsType()
export class UpdateOneAdjustmentTaskArgs {

    @Field(() => AdjustmentTaskUpdateInput, {nullable:false})
    @Type(() => AdjustmentTaskUpdateInput)
    data!: AdjustmentTaskUpdateInput;

    @Field(() => AdjustmentTaskWhereUniqueInput, {nullable:false})
    @Type(() => AdjustmentTaskWhereUniqueInput)
    where!: Prisma.AtLeast<AdjustmentTaskWhereUniqueInput, 'id'>;
}
