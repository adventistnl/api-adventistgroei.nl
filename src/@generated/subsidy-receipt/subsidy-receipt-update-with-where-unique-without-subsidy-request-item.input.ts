import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyReceiptWhereUniqueInput } from './subsidy-receipt-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyReceiptUpdateWithoutSubsidy_request_itemInput } from './subsidy-receipt-update-without-subsidy-request-item.input';

@InputType()
export class SubsidyReceiptUpdateWithWhereUniqueWithoutSubsidy_request_itemInput {

    @Field(() => SubsidyReceiptWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyReceiptWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyReceiptWhereUniqueInput, 'id'>;

    @Field(() => SubsidyReceiptUpdateWithoutSubsidy_request_itemInput, {nullable:false})
    @Type(() => SubsidyReceiptUpdateWithoutSubsidy_request_itemInput)
    data!: SubsidyReceiptUpdateWithoutSubsidy_request_itemInput;
}
