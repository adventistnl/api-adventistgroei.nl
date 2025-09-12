import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyReceiptWhereUniqueInput } from './subsidy-receipt-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyReceiptUpdateWithoutProject_activityInput } from './subsidy-receipt-update-without-project-activity.input';
import { SubsidyReceiptCreateWithoutProject_activityInput } from './subsidy-receipt-create-without-project-activity.input';

@InputType()
export class SubsidyReceiptUpsertWithWhereUniqueWithoutProject_activityInput {

    @Field(() => SubsidyReceiptWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyReceiptWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyReceiptWhereUniqueInput, 'id'>;

    @Field(() => SubsidyReceiptUpdateWithoutProject_activityInput, {nullable:false})
    @Type(() => SubsidyReceiptUpdateWithoutProject_activityInput)
    update!: SubsidyReceiptUpdateWithoutProject_activityInput;

    @Field(() => SubsidyReceiptCreateWithoutProject_activityInput, {nullable:false})
    @Type(() => SubsidyReceiptCreateWithoutProject_activityInput)
    create!: SubsidyReceiptCreateWithoutProject_activityInput;
}
