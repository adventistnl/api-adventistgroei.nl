import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyReceiptCreateManyProject_activityInput } from './subsidy-receipt-create-many-project-activity.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyReceiptCreateManyProject_activityInputEnvelope {

    @Field(() => [SubsidyReceiptCreateManyProject_activityInput], {nullable:false})
    @Type(() => SubsidyReceiptCreateManyProject_activityInput)
    data!: Array<SubsidyReceiptCreateManyProject_activityInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
