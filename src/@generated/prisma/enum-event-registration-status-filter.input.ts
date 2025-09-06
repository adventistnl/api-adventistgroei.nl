import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventRegistrationStatus } from './event-registration-status.enum';
import { NestedEnumEventRegistrationStatusFilter } from './nested-enum-event-registration-status-filter.input';

@InputType()
export class EnumEventRegistrationStatusFilter {

    @Field(() => EventRegistrationStatus, {nullable:true})
    equals?: `${EventRegistrationStatus}`;

    @Field(() => [EventRegistrationStatus], {nullable:true})
    in?: Array<`${EventRegistrationStatus}`>;

    @Field(() => [EventRegistrationStatus], {nullable:true})
    notIn?: Array<`${EventRegistrationStatus}`>;

    @Field(() => NestedEnumEventRegistrationStatusFilter, {nullable:true})
    not?: NestedEnumEventRegistrationStatusFilter;
}
