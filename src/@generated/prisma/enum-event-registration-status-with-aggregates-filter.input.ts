import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventRegistrationStatus } from './event-registration-status.enum';
import { NestedEnumEventRegistrationStatusWithAggregatesFilter } from './nested-enum-event-registration-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumEventRegistrationStatusFilter } from './nested-enum-event-registration-status-filter.input';

@InputType()
export class EnumEventRegistrationStatusWithAggregatesFilter {

    @Field(() => EventRegistrationStatus, {nullable:true})
    equals?: `${EventRegistrationStatus}`;

    @Field(() => [EventRegistrationStatus], {nullable:true})
    in?: Array<`${EventRegistrationStatus}`>;

    @Field(() => [EventRegistrationStatus], {nullable:true})
    notIn?: Array<`${EventRegistrationStatus}`>;

    @Field(() => NestedEnumEventRegistrationStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumEventRegistrationStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumEventRegistrationStatusFilter, {nullable:true})
    _min?: NestedEnumEventRegistrationStatusFilter;

    @Field(() => NestedEnumEventRegistrationStatusFilter, {nullable:true})
    _max?: NestedEnumEventRegistrationStatusFilter;
}
