import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyReceiptCreateManySubsidy_requestInput } from './subsidy-receipt-create-many-subsidy-request.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyReceiptCreateManySubsidy_requestInputEnvelope {

    @Field(() => [SubsidyReceiptCreateManySubsidy_requestInput], {nullable:false})
    @Type(() => SubsidyReceiptCreateManySubsidy_requestInput)
    data!: Array<SubsidyReceiptCreateManySubsidy_requestInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
