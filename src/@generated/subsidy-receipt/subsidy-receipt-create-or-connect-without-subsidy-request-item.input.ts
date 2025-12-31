import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyReceiptWhereUniqueInput } from './subsidy-receipt-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyReceiptCreateWithoutSubsidy_request_itemInput } from './subsidy-receipt-create-without-subsidy-request-item.input';

@InputType()
export class SubsidyReceiptCreateOrConnectWithoutSubsidy_request_itemInput {

    @Field(() => SubsidyReceiptWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyReceiptWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyReceiptWhereUniqueInput, 'id'>;

    @Field(() => SubsidyReceiptCreateWithoutSubsidy_request_itemInput, {nullable:false})
    @Type(() => SubsidyReceiptCreateWithoutSubsidy_request_itemInput)
    create!: SubsidyReceiptCreateWithoutSubsidy_request_itemInput;
}
