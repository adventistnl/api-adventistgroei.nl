import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyReceiptCreateManySubsidy_activityInput } from './subsidy-receipt-create-many-subsidy-activity.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyReceiptCreateManySubsidy_activityInputEnvelope {

    @Field(() => [SubsidyReceiptCreateManySubsidy_activityInput], {nullable:false})
    @Type(() => SubsidyReceiptCreateManySubsidy_activityInput)
    data!: Array<SubsidyReceiptCreateManySubsidy_activityInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
