import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyReceiptCreateManySubsidy_request_itemInput } from './subsidy-receipt-create-many-subsidy-request-item.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyReceiptCreateManySubsidy_request_itemInputEnvelope {

    @Field(() => [SubsidyReceiptCreateManySubsidy_request_itemInput], {nullable:false})
    @Type(() => SubsidyReceiptCreateManySubsidy_request_itemInput)
    data!: Array<SubsidyReceiptCreateManySubsidy_request_itemInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
