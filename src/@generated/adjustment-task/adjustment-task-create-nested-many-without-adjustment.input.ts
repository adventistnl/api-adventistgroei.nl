import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdjustmentTaskCreateWithoutAdjustmentInput } from './adjustment-task-create-without-adjustment.input';
import { Type } from 'class-transformer';
import { AdjustmentTaskCreateOrConnectWithoutAdjustmentInput } from './adjustment-task-create-or-connect-without-adjustment.input';
import { AdjustmentTaskCreateManyAdjustmentInputEnvelope } from './adjustment-task-create-many-adjustment-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AdjustmentTaskWhereUniqueInput } from './adjustment-task-where-unique.input';

@InputType()
export class AdjustmentTaskCreateNestedManyWithoutAdjustmentInput {

    @Field(() => [AdjustmentTaskCreateWithoutAdjustmentInput], {nullable:true})
    @Type(() => AdjustmentTaskCreateWithoutAdjustmentInput)
    create?: Array<AdjustmentTaskCreateWithoutAdjustmentInput>;

    @Field(() => [AdjustmentTaskCreateOrConnectWithoutAdjustmentInput], {nullable:true})
    @Type(() => AdjustmentTaskCreateOrConnectWithoutAdjustmentInput)
    connectOrCreate?: Array<AdjustmentTaskCreateOrConnectWithoutAdjustmentInput>;

    @Field(() => AdjustmentTaskCreateManyAdjustmentInputEnvelope, {nullable:true})
    @Type(() => AdjustmentTaskCreateManyAdjustmentInputEnvelope)
    createMany?: AdjustmentTaskCreateManyAdjustmentInputEnvelope;

    @Field(() => [AdjustmentTaskWhereUniqueInput], {nullable:true})
    @Type(() => AdjustmentTaskWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AdjustmentTaskWhereUniqueInput, 'id'>>;
}
