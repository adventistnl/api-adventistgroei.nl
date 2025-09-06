import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyReceiptCreateInput } from './subsidy-receipt-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSubsidyReceiptArgs {

    @Field(() => SubsidyReceiptCreateInput, {nullable:false})
    @Type(() => SubsidyReceiptCreateInput)
    data!: SubsidyReceiptCreateInput;
}
