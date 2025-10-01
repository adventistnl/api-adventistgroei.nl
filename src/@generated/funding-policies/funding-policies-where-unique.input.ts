import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FundingPoliciesWhereInput } from './funding-policies-where.input';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class FundingPoliciesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [FundingPoliciesWhereInput], {nullable:true})
    @Type(() => FundingPoliciesWhereInput)
    AND?: Array<FundingPoliciesWhereInput>;

    @Field(() => [FundingPoliciesWhereInput], {nullable:true})
    @Type(() => FundingPoliciesWhereInput)
    OR?: Array<FundingPoliciesWhereInput>;

    @Field(() => [FundingPoliciesWhereInput], {nullable:true})
    @Type(() => FundingPoliciesWhereInput)
    NOT?: Array<FundingPoliciesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    entity_type?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    entity_id?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    max_percent?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    annual_cap?: DecimalFilter;

    @Field(() => IntFilter, {nullable:true})
    year?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;
}
