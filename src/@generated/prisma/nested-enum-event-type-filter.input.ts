import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventType } from './event-type.enum';

@InputType()
export class NestedEnumEventTypeFilter {

    @Field(() => EventType, {nullable:true})
    equals?: `${EventType}`;

    @Field(() => [EventType], {nullable:true})
    in?: Array<`${EventType}`>;

    @Field(() => [EventType], {nullable:true})
    notIn?: Array<`${EventType}`>;

    @Field(() => NestedEnumEventTypeFilter, {nullable:true})
    not?: NestedEnumEventTypeFilter;
}
