import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyReceiptCreateWithoutSubsidy_activityInput } from './subsidy-receipt-create-without-subsidy-activity.input';
import { Type } from 'class-transformer';
import { SubsidyReceiptCreateOrConnectWithoutSubsidy_activityInput } from './subsidy-receipt-create-or-connect-without-subsidy-activity.input';
import { SubsidyReceiptUpsertWithWhereUniqueWithoutSubsidy_activityInput } from './subsidy-receipt-upsert-with-where-unique-without-subsidy-activity.input';
import { SubsidyReceiptCreateManySubsidy_activityInputEnvelope } from './subsidy-receipt-create-many-subsidy-activity-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyReceiptWhereUniqueInput } from './subsidy-receipt-where-unique.input';
import { SubsidyReceiptUpdateWithWhereUniqueWithoutSubsidy_activityInput } from './subsidy-receipt-update-with-where-unique-without-subsidy-activity.input';
import { SubsidyReceiptUpdateManyWithWhereWithoutSubsidy_activityInput } from './subsidy-receipt-update-many-with-where-without-subsidy-activity.input';
import { SubsidyReceiptScalarWhereInput } from './subsidy-receipt-scalar-where.input';

@InputType()
export class SubsidyReceiptUncheckedUpdateManyWithoutSubsidy_activityNestedInput {

    @Field(() => [SubsidyReceiptCreateWithoutSubsidy_activityInput], {nullable:true})
    @Type(() => SubsidyReceiptCreateWithoutSubsidy_activityInput)
    create?: Array<SubsidyReceiptCreateWithoutSubsidy_activityInput>;

    @Field(() => [SubsidyReceiptCreateOrConnectWithoutSubsidy_activityInput], {nullable:true})
    @Type(() => SubsidyReceiptCreateOrConnectWithoutSubsidy_activityInput)
    connectOrCreate?: Array<SubsidyReceiptCreateOrConnectWithoutSubsidy_activityInput>;

    @Field(() => [SubsidyReceiptUpsertWithWhereUniqueWithoutSubsidy_activityInput], {nullable:true})
    @Type(() => SubsidyReceiptUpsertWithWhereUniqueWithoutSubsidy_activityInput)
    upsert?: Array<SubsidyReceiptUpsertWithWhereUniqueWithoutSubsidy_activityInput>;

    @Field(() => SubsidyReceiptCreateManySubsidy_activityInputEnvelope, {nullable:true})
    @Type(() => SubsidyReceiptCreateManySubsidy_activityInputEnvelope)
    createMany?: SubsidyReceiptCreateManySubsidy_activityInputEnvelope;

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

    @Field(() => [SubsidyReceiptUpdateWithWhereUniqueWithoutSubsidy_activityInput], {nullable:true})
    @Type(() => SubsidyReceiptUpdateWithWhereUniqueWithoutSubsidy_activityInput)
    update?: Array<SubsidyReceiptUpdateWithWhereUniqueWithoutSubsidy_activityInput>;

    @Field(() => [SubsidyReceiptUpdateManyWithWhereWithoutSubsidy_activityInput], {nullable:true})
    @Type(() => SubsidyReceiptUpdateManyWithWhereWithoutSubsidy_activityInput)
    updateMany?: Array<SubsidyReceiptUpdateManyWithWhereWithoutSubsidy_activityInput>;

    @Field(() => [SubsidyReceiptScalarWhereInput], {nullable:true})
    @Type(() => SubsidyReceiptScalarWhereInput)
    deleteMany?: Array<SubsidyReceiptScalarWhereInput>;
}
