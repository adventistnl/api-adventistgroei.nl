import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyReceiptCreateWithoutProject_activityInput } from './subsidy-receipt-create-without-project-activity.input';
import { Type } from 'class-transformer';
import { SubsidyReceiptCreateOrConnectWithoutProject_activityInput } from './subsidy-receipt-create-or-connect-without-project-activity.input';
import { SubsidyReceiptCreateManyProject_activityInputEnvelope } from './subsidy-receipt-create-many-project-activity-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyReceiptWhereUniqueInput } from './subsidy-receipt-where-unique.input';

@InputType()
export class SubsidyReceiptUncheckedCreateNestedManyWithoutProject_activityInput {

    @Field(() => [SubsidyReceiptCreateWithoutProject_activityInput], {nullable:true})
    @Type(() => SubsidyReceiptCreateWithoutProject_activityInput)
    create?: Array<SubsidyReceiptCreateWithoutProject_activityInput>;

    @Field(() => [SubsidyReceiptCreateOrConnectWithoutProject_activityInput], {nullable:true})
    @Type(() => SubsidyReceiptCreateOrConnectWithoutProject_activityInput)
    connectOrCreate?: Array<SubsidyReceiptCreateOrConnectWithoutProject_activityInput>;

    @Field(() => SubsidyReceiptCreateManyProject_activityInputEnvelope, {nullable:true})
    @Type(() => SubsidyReceiptCreateManyProject_activityInputEnvelope)
    createMany?: SubsidyReceiptCreateManyProject_activityInputEnvelope;

    @Field(() => [SubsidyReceiptWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyReceiptWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyReceiptWhereUniqueInput, 'id'>>;
}
