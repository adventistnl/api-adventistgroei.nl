import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class VerificationCodeScalarWhereWithAggregatesInput {

    @Field(() => [VerificationCodeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<VerificationCodeScalarWhereWithAggregatesInput>;

    @Field(() => [VerificationCodeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<VerificationCodeScalarWhereWithAggregatesInput>;

    @Field(() => [VerificationCodeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<VerificationCodeScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expiresAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    attempts?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    used?: BoolWithAggregatesFilter;
}
