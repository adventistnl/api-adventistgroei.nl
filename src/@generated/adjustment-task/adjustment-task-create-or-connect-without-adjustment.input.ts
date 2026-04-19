import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdjustmentTaskWhereUniqueInput } from './adjustment-task-where-unique.input';
import { Type } from 'class-transformer';
import { AdjustmentTaskCreateWithoutAdjustmentInput } from './adjustment-task-create-without-adjustment.input';

@InputType()
export class AdjustmentTaskCreateOrConnectWithoutAdjustmentInput {

    @Field(() => AdjustmentTaskWhereUniqueInput, {nullable:false})
    @Type(() => AdjustmentTaskWhereUniqueInput)
    where!: Prisma.AtLeast<AdjustmentTaskWhereUniqueInput, 'id'>;

    @Field(() => AdjustmentTaskCreateWithoutAdjustmentInput, {nullable:false})
    @Type(() => AdjustmentTaskCreateWithoutAdjustmentInput)
    create!: AdjustmentTaskCreateWithoutAdjustmentInput;
}
