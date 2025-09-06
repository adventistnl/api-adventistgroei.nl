import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventType } from './event-type.enum';
import { NestedEnumEventTypeFilter } from './nested-enum-event-type-filter.input';

@InputType()
export class EnumEventTypeFilter {

    @Field(() => EventType, {nullable:true})
    equals?: `${EventType}`;

    @Field(() => [EventType], {nullable:true})
    in?: Array<`${EventType}`>;

    @Field(() => [EventType], {nullable:true})
    notIn?: Array<`${EventType}`>;

    @Field(() => NestedEnumEventTypeFilter, {nullable:true})
    not?: NestedEnumEventTypeFilter;
}
