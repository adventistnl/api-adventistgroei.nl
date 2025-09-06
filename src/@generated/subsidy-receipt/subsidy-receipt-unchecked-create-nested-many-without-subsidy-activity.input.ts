import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyReceiptCreateWithoutSubsidy_activityInput } from './subsidy-receipt-create-without-subsidy-activity.input';
import { Type } from 'class-transformer';
import { SubsidyReceiptCreateOrConnectWithoutSubsidy_activityInput } from './subsidy-receipt-create-or-connect-without-subsidy-activity.input';
import { SubsidyReceiptCreateManySubsidy_activityInputEnvelope } from './subsidy-receipt-create-many-subsidy-activity-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyReceiptWhereUniqueInput } from './subsidy-receipt-where-unique.input';

@InputType()
export class SubsidyReceiptUncheckedCreateNestedManyWithoutSubsidy_activityInput {

    @Field(() => [SubsidyReceiptCreateWithoutSubsidy_activityInput], {nullable:true})
    @Type(() => SubsidyReceiptCreateWithoutSubsidy_activityInput)
    create?: Array<SubsidyReceiptCreateWithoutSubsidy_activityInput>;

    @Field(() => [SubsidyReceiptCreateOrConnectWithoutSubsidy_activityInput], {nullable:true})
    @Type(() => SubsidyReceiptCreateOrConnectWithoutSubsidy_activityInput)
    connectOrCreate?: Array<SubsidyReceiptCreateOrConnectWithoutSubsidy_activityInput>;

    @Field(() => SubsidyReceiptCreateManySubsidy_activityInputEnvelope, {nullable:true})
    @Type(() => SubsidyReceiptCreateManySubsidy_activityInputEnvelope)
    createMany?: SubsidyReceiptCreateManySubsidy_activityInputEnvelope;

    @Field(() => [SubsidyReceiptWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyReceiptWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyReceiptWhereUniqueInput, 'id'>>;
}
