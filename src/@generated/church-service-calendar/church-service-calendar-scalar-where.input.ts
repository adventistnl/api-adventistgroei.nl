import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumServiceCalendarSourceFilter } from '../prisma/enum-service-calendar-source-filter.input';

@InputType()
export class ChurchServiceCalendarScalarWhereInput {

    @Field(() => [ChurchServiceCalendarScalarWhereInput], {nullable:true})
    AND?: Array<ChurchServiceCalendarScalarWhereInput>;

    @Field(() => [ChurchServiceCalendarScalarWhereInput], {nullable:true})
    OR?: Array<ChurchServiceCalendarScalarWhereInput>;

    @Field(() => [ChurchServiceCalendarScalarWhereInput], {nullable:true})
    NOT?: Array<ChurchServiceCalendarScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    institution_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    church_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    has_service?: BoolFilter;

    @Field(() => EnumServiceCalendarSourceFilter, {nullable:true})
    source?: EnumServiceCalendarSourceFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    updated_by?: StringFilter;
}
