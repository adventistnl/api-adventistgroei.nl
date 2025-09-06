import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventRegistrationStatus } from './event-registration-status.enum';

@InputType()
export class NestedEnumEventRegistrationStatusFilter {

    @Field(() => EventRegistrationStatus, {nullable:true})
    equals?: `${EventRegistrationStatus}`;

    @Field(() => [EventRegistrationStatus], {nullable:true})
    in?: Array<`${EventRegistrationStatus}`>;

    @Field(() => [EventRegistrationStatus], {nullable:true})
    notIn?: Array<`${EventRegistrationStatus}`>;

    @Field(() => NestedEnumEventRegistrationStatusFilter, {nullable:true})
    not?: NestedEnumEventRegistrationStatusFilter;
}
