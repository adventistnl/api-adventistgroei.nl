import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdjustmentTaskWhereUniqueInput } from './adjustment-task-where-unique.input';
import { Type } from 'class-transformer';
import { AdjustmentTaskUpdateWithoutAdjustmentInput } from './adjustment-task-update-without-adjustment.input';
import { AdjustmentTaskCreateWithoutAdjustmentInput } from './adjustment-task-create-without-adjustment.input';

@InputType()
export class AdjustmentTaskUpsertWithWhereUniqueWithoutAdjustmentInput {

    @Field(() => AdjustmentTaskWhereUniqueInput, {nullable:false})
    @Type(() => AdjustmentTaskWhereUniqueInput)
    where!: Prisma.AtLeast<AdjustmentTaskWhereUniqueInput, 'id'>;

    @Field(() => AdjustmentTaskUpdateWithoutAdjustmentInput, {nullable:false})
    @Type(() => AdjustmentTaskUpdateWithoutAdjustmentInput)
    update!: AdjustmentTaskUpdateWithoutAdjustmentInput;

    @Field(() => AdjustmentTaskCreateWithoutAdjustmentInput, {nullable:false})
    @Type(() => AdjustmentTaskCreateWithoutAdjustmentInput)
    create!: AdjustmentTaskCreateWithoutAdjustmentInput;
}
