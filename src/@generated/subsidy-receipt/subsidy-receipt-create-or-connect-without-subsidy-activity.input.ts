import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyReceiptWhereUniqueInput } from './subsidy-receipt-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyReceiptCreateWithoutSubsidy_activityInput } from './subsidy-receipt-create-without-subsidy-activity.input';

@InputType()
export class SubsidyReceiptCreateOrConnectWithoutSubsidy_activityInput {

    @Field(() => SubsidyReceiptWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyReceiptWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyReceiptWhereUniqueInput, 'id'>;

    @Field(() => SubsidyReceiptCreateWithoutSubsidy_activityInput, {nullable:false})
    @Type(() => SubsidyReceiptCreateWithoutSubsidy_activityInput)
    create!: SubsidyReceiptCreateWithoutSubsidy_activityInput;
}
