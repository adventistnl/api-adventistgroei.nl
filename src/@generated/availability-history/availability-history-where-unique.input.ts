import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityHistoryWhereInput } from './availability-history-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AvailabilityHistoryWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [AvailabilityHistoryWhereInput], {nullable:true})
    AND?: Array<AvailabilityHistoryWhereInput>;

    @Field(() => [AvailabilityHistoryWhereInput], {nullable:true})
    OR?: Array<AvailabilityHistoryWhereInput>;

    @Field(() => [AvailabilityHistoryWhereInput], {nullable:true})
    NOT?: Array<AvailabilityHistoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    availability_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    field_name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    old_value?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    new_value?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    changed_by?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    changed_at?: DateTimeFilter;
}
