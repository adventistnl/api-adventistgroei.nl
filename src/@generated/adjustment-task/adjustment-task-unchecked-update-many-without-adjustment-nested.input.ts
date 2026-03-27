import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdjustmentTaskCreateWithoutAdjustmentInput } from './adjustment-task-create-without-adjustment.input';
import { Type } from 'class-transformer';
import { AdjustmentTaskCreateOrConnectWithoutAdjustmentInput } from './adjustment-task-create-or-connect-without-adjustment.input';
import { AdjustmentTaskUpsertWithWhereUniqueWithoutAdjustmentInput } from './adjustment-task-upsert-with-where-unique-without-adjustment.input';
import { AdjustmentTaskCreateManyAdjustmentInputEnvelope } from './adjustment-task-create-many-adjustment-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AdjustmentTaskWhereUniqueInput } from './adjustment-task-where-unique.input';
import { AdjustmentTaskUpdateWithWhereUniqueWithoutAdjustmentInput } from './adjustment-task-update-with-where-unique-without-adjustment.input';
import { AdjustmentTaskUpdateManyWithWhereWithoutAdjustmentInput } from './adjustment-task-update-many-with-where-without-adjustment.input';
import { AdjustmentTaskScalarWhereInput } from './adjustment-task-scalar-where.input';

@InputType()
export class AdjustmentTaskUncheckedUpdateManyWithoutAdjustmentNestedInput {

    @Field(() => [AdjustmentTaskCreateWithoutAdjustmentInput], {nullable:true})
    @Type(() => AdjustmentTaskCreateWithoutAdjustmentInput)
    create?: Array<AdjustmentTaskCreateWithoutAdjustmentInput>;

    @Field(() => [AdjustmentTaskCreateOrConnectWithoutAdjustmentInput], {nullable:true})
    @Type(() => AdjustmentTaskCreateOrConnectWithoutAdjustmentInput)
    connectOrCreate?: Array<AdjustmentTaskCreateOrConnectWithoutAdjustmentInput>;

    @Field(() => [AdjustmentTaskUpsertWithWhereUniqueWithoutAdjustmentInput], {nullable:true})
    @Type(() => AdjustmentTaskUpsertWithWhereUniqueWithoutAdjustmentInput)
    upsert?: Array<AdjustmentTaskUpsertWithWhereUniqueWithoutAdjustmentInput>;

    @Field(() => AdjustmentTaskCreateManyAdjustmentInputEnvelope, {nullable:true})
    @Type(() => AdjustmentTaskCreateManyAdjustmentInputEnvelope)
    createMany?: AdjustmentTaskCreateManyAdjustmentInputEnvelope;

    @Field(() => [AdjustmentTaskWhereUniqueInput], {nullable:true})
    @Type(() => AdjustmentTaskWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AdjustmentTaskWhereUniqueInput, 'id'>>;

    @Field(() => [AdjustmentTaskWhereUniqueInput], {nullable:true})
    @Type(() => AdjustmentTaskWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AdjustmentTaskWhereUniqueInput, 'id'>>;

    @Field(() => [AdjustmentTaskWhereUniqueInput], {nullable:true})
    @Type(() => AdjustmentTaskWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AdjustmentTaskWhereUniqueInput, 'id'>>;

    @Field(() => [AdjustmentTaskWhereUniqueInput], {nullable:true})
    @Type(() => AdjustmentTaskWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AdjustmentTaskWhereUniqueInput, 'id'>>;

    @Field(() => [AdjustmentTaskUpdateWithWhereUniqueWithoutAdjustmentInput], {nullable:true})
    @Type(() => AdjustmentTaskUpdateWithWhereUniqueWithoutAdjustmentInput)
    update?: Array<AdjustmentTaskUpdateWithWhereUniqueWithoutAdjustmentInput>;

    @Field(() => [AdjustmentTaskUpdateManyWithWhereWithoutAdjustmentInput], {nullable:true})
    @Type(() => AdjustmentTaskUpdateManyWithWhereWithoutAdjustmentInput)
    updateMany?: Array<AdjustmentTaskUpdateManyWithWhereWithoutAdjustmentInput>;

    @Field(() => [AdjustmentTaskScalarWhereInput], {nullable:true})
    @Type(() => AdjustmentTaskScalarWhereInput)
    deleteMany?: Array<AdjustmentTaskScalarWhereInput>;
}
