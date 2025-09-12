import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyReceiptCreateWithoutProject_activityInput } from './subsidy-receipt-create-without-project-activity.input';
import { Type } from 'class-transformer';
import { SubsidyReceiptCreateOrConnectWithoutProject_activityInput } from './subsidy-receipt-create-or-connect-without-project-activity.input';
import { SubsidyReceiptUpsertWithWhereUniqueWithoutProject_activityInput } from './subsidy-receipt-upsert-with-where-unique-without-project-activity.input';
import { SubsidyReceiptCreateManyProject_activityInputEnvelope } from './subsidy-receipt-create-many-project-activity-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyReceiptWhereUniqueInput } from './subsidy-receipt-where-unique.input';
import { SubsidyReceiptUpdateWithWhereUniqueWithoutProject_activityInput } from './subsidy-receipt-update-with-where-unique-without-project-activity.input';
import { SubsidyReceiptUpdateManyWithWhereWithoutProject_activityInput } from './subsidy-receipt-update-many-with-where-without-project-activity.input';
import { SubsidyReceiptScalarWhereInput } from './subsidy-receipt-scalar-where.input';

@InputType()
export class SubsidyReceiptUncheckedUpdateManyWithoutProject_activityNestedInput {

    @Field(() => [SubsidyReceiptCreateWithoutProject_activityInput], {nullable:true})
    @Type(() => SubsidyReceiptCreateWithoutProject_activityInput)
    create?: Array<SubsidyReceiptCreateWithoutProject_activityInput>;

    @Field(() => [SubsidyReceiptCreateOrConnectWithoutProject_activityInput], {nullable:true})
    @Type(() => SubsidyReceiptCreateOrConnectWithoutProject_activityInput)
    connectOrCreate?: Array<SubsidyReceiptCreateOrConnectWithoutProject_activityInput>;

    @Field(() => [SubsidyReceiptUpsertWithWhereUniqueWithoutProject_activityInput], {nullable:true})
    @Type(() => SubsidyReceiptUpsertWithWhereUniqueWithoutProject_activityInput)
    upsert?: Array<SubsidyReceiptUpsertWithWhereUniqueWithoutProject_activityInput>;

    @Field(() => SubsidyReceiptCreateManyProject_activityInputEnvelope, {nullable:true})
    @Type(() => SubsidyReceiptCreateManyProject_activityInputEnvelope)
    createMany?: SubsidyReceiptCreateManyProject_activityInputEnvelope;

    @Field(() => [SubsidyReceiptWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyReceiptWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SubsidyReceiptWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyReceiptWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyReceiptWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SubsidyReceiptWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyReceiptWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyReceiptWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SubsidyReceiptWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyReceiptWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyReceiptWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyReceiptWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyReceiptUpdateWithWhereUniqueWithoutProject_activityInput], {nullable:true})
    @Type(() => SubsidyReceiptUpdateWithWhereUniqueWithoutProject_activityInput)
    update?: Array<SubsidyReceiptUpdateWithWhereUniqueWithoutProject_activityInput>;

    @Field(() => [SubsidyReceiptUpdateManyWithWhereWithoutProject_activityInput], {nullable:true})
    @Type(() => SubsidyReceiptUpdateManyWithWhereWithoutProject_activityInput)
    updateMany?: Array<SubsidyReceiptUpdateManyWithWhereWithoutProject_activityInput>;

    @Field(() => [SubsidyReceiptScalarWhereInput], {nullable:true})
    @Type(() => SubsidyReceiptScalarWhereInput)
    deleteMany?: Array<SubsidyReceiptScalarWhereInput>;
}
