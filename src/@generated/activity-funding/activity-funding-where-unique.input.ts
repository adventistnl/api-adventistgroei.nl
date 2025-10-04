import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityFundingWhereInput } from './activity-funding-where.input';
import { Type } from 'class-transformer';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { EnumEntityTypeFilter } from '../prisma/enum-entity-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProjectActivityScalarRelationFilter } from '../project-activity/project-activity-scalar-relation-filter.input';

@InputType()
export class ActivityFundingWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    activity_id?: string;

    @Field(() => [ActivityFundingWhereInput], {nullable:true})
    @Type(() => ActivityFundingWhereInput)
    AND?: Array<ActivityFundingWhereInput>;

    @Field(() => [ActivityFundingWhereInput], {nullable:true})
    @Type(() => ActivityFundingWhereInput)
    OR?: Array<ActivityFundingWhereInput>;

    @Field(() => [ActivityFundingWhereInput], {nullable:true})
    @Type(() => ActivityFundingWhereInput)
    NOT?: Array<ActivityFundingWhereInput>;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    entity_contribution_amount?: DecimalFilter;

    @Field(() => FloatFilter, {nullable:true})
    entity_contribution_percent?: FloatFilter;

    @Field(() => EnumEntityTypeFilter, {nullable:true})
    entity_type?: EnumEntityTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    entity_id?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    validated?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => ProjectActivityScalarRelationFilter, {nullable:true})
    @Type(() => ProjectActivityScalarRelationFilter)
    activity?: ProjectActivityScalarRelationFilter;
}
