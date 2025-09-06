import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyReceiptWhereUniqueInput } from './subsidy-receipt-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueSubsidyReceiptArgs {

    @Field(() => SubsidyReceiptWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyReceiptWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyReceiptWhereUniqueInput, 'id'>;
}
