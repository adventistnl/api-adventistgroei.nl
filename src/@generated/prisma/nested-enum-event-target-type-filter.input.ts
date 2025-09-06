import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTargetType } from './event-target-type.enum';

@InputType()
export class NestedEnumEventTargetTypeFilter {

    @Field(() => EventTargetType, {nullable:true})
    equals?: `${EventTargetType}`;

    @Field(() => [EventTargetType], {nullable:true})
    in?: Array<`${EventTargetType}`>;

    @Field(() => [EventTargetType], {nullable:true})
    notIn?: Array<`${EventTargetType}`>;

    @Field(() => NestedEnumEventTargetTypeFilter, {nullable:true})
    not?: NestedEnumEventTargetTypeFilter;
}
