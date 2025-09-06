import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyReceiptWhereUniqueInput } from './subsidy-receipt-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyReceiptCreateInput } from './subsidy-receipt-create.input';
import { SubsidyReceiptUpdateInput } from './subsidy-receipt-update.input';

@ArgsType()
export class UpsertOneSubsidyReceiptArgs {

    @Field(() => SubsidyReceiptWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyReceiptWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyReceiptWhereUniqueInput, 'id'>;

    @Field(() => SubsidyReceiptCreateInput, {nullable:false})
    @Type(() => SubsidyReceiptCreateInput)
    create!: SubsidyReceiptCreateInput;

    @Field(() => SubsidyReceiptUpdateInput, {nullable:false})
    @Type(() => SubsidyReceiptUpdateInput)
    update!: SubsidyReceiptUpdateInput;
}
