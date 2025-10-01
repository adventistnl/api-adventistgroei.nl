import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityFundingWhereInput } from './activity-funding-where.input';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ActivityFundingWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ActivityFundingWhereInput], {nullable:true})
    @Type(() => ActivityFundingWhereInput)
    AND?: Array<ActivityFundingWhereInput>;

    @Field(() => [ActivityFundingWhereInput], {nullable:true})
    @Type(() => ActivityFundingWhereInput)
    OR?: Array<ActivityFundingWhereInput>;

    @Field(() => [ActivityFundingWhereInput], {nullable:true})
    @Type(() => ActivityFundingWhereInput)
    NOT?: Array<ActivityFundingWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    activity_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    entity_type?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    entity_id?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    contribution_amount?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    contribution_percent?: DecimalFilter;

    @Field(() => BoolFilter, {nullable:true})
    validated?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
