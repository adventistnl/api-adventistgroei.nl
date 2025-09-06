import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyReceiptWhereInput } from './subsidy-receipt-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManySubsidyReceiptArgs {

    @Field(() => SubsidyReceiptWhereInput, {nullable:true})
    @Type(() => SubsidyReceiptWhereInput)
    where?: SubsidyReceiptWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
