import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTargetType } from './event-target-type.enum';
import { NestedEnumEventTargetTypeFilter } from './nested-enum-event-target-type-filter.input';

@InputType()
export class EnumEventTargetTypeFilter {

    @Field(() => EventTargetType, {nullable:true})
    equals?: `${EventTargetType}`;

    @Field(() => [EventTargetType], {nullable:true})
    in?: Array<`${EventTargetType}`>;

    @Field(() => [EventTargetType], {nullable:true})
    notIn?: Array<`${EventTargetType}`>;

    @Field(() => NestedEnumEventTargetTypeFilter, {nullable:true})
    not?: NestedEnumEventTargetTypeFilter;
}
