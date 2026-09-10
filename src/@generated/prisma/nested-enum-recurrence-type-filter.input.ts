import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecurrenceType } from './recurrence-type.enum';

@InputType()
export class NestedEnumRecurrenceTypeFilter {

    @Field(() => RecurrenceType, {nullable:true})
    equals?: `${RecurrenceType}`;

    @Field(() => [RecurrenceType], {nullable:true})
    in?: Array<`${RecurrenceType}`>;

    @Field(() => [RecurrenceType], {nullable:true})
    notIn?: Array<`${RecurrenceType}`>;

    @Field(() => NestedEnumRecurrenceTypeFilter, {nullable:true})
    not?: NestedEnumRecurrenceTypeFilter;
}
