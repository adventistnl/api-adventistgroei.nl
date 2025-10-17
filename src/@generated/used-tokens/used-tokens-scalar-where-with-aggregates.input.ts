import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UsedTokensScalarWhereWithAggregatesInput {

    @Field(() => [UsedTokensScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UsedTokensScalarWhereWithAggregatesInput>;

    @Field(() => [UsedTokensScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UsedTokensScalarWhereWithAggregatesInput>;

    @Field(() => [UsedTokensScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UsedTokensScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    token?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    usedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    tokenExpiresAt?: DateTimeWithAggregatesFilter;
}
