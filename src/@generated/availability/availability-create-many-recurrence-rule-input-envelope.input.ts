import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityCreateManyRecurrence_ruleInput } from './availability-create-many-recurrence-rule.input';
import { Type } from 'class-transformer';

@InputType()
export class AvailabilityCreateManyRecurrence_ruleInputEnvelope {

    @Field(() => [AvailabilityCreateManyRecurrence_ruleInput], {nullable:false})
    @Type(() => AvailabilityCreateManyRecurrence_ruleInput)
    data!: Array<AvailabilityCreateManyRecurrence_ruleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
