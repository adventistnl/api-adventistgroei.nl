import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AvailabilityHistoryCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    availability_id?: true;

    @Field(() => Boolean, {nullable:true})
    field_name?: true;

    @Field(() => Boolean, {nullable:true})
    old_value?: true;

    @Field(() => Boolean, {nullable:true})
    new_value?: true;

    @Field(() => Boolean, {nullable:true})
    changed_by?: true;

    @Field(() => Boolean, {nullable:true})
    changed_at?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
