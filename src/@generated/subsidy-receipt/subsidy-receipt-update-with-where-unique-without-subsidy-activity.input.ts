import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyReceiptWhereUniqueInput } from './subsidy-receipt-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyReceiptUpdateWithoutSubsidy_activityInput } from './subsidy-receipt-update-without-subsidy-activity.input';

@InputType()
export class SubsidyReceiptUpdateWithWhereUniqueWithoutSubsidy_activityInput {

    @Field(() => SubsidyReceiptWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyReceiptWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyReceiptWhereUniqueInput, 'id'>;

    @Field(() => SubsidyReceiptUpdateWithoutSubsidy_activityInput, {nullable:false})
    @Type(() => SubsidyReceiptUpdateWithoutSubsidy_activityInput)
    data!: SubsidyReceiptUpdateWithoutSubsidy_activityInput;
}
