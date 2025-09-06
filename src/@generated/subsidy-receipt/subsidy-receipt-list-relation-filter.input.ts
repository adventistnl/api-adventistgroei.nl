import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyReceiptWhereInput } from './subsidy-receipt-where.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyReceiptListRelationFilter {

    @Field(() => SubsidyReceiptWhereInput, {nullable:true})
    @Type(() => SubsidyReceiptWhereInput)
    every?: SubsidyReceiptWhereInput;

    @Field(() => SubsidyReceiptWhereInput, {nullable:true})
    @Type(() => SubsidyReceiptWhereInput)
    some?: SubsidyReceiptWhereInput;

    @Field(() => SubsidyReceiptWhereInput, {nullable:true})
    @Type(() => SubsidyReceiptWhereInput)
    none?: SubsidyReceiptWhereInput;
}
