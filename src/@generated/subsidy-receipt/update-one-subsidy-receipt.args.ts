import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyReceiptUpdateInput } from './subsidy-receipt-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SubsidyReceiptWhereUniqueInput } from './subsidy-receipt-where-unique.input';

@ArgsType()
export class UpdateOneSubsidyReceiptArgs {

    @Field(() => SubsidyReceiptUpdateInput, {nullable:false})
    @Type(() => SubsidyReceiptUpdateInput)
    data!: SubsidyReceiptUpdateInput;

    @Field(() => SubsidyReceiptWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyReceiptWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyReceiptWhereUniqueInput, 'id'>;
}
