import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UsedInviteTokensScalarWhereWithAggregatesInput {

    @Field(() => [UsedInviteTokensScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UsedInviteTokensScalarWhereWithAggregatesInput>;

    @Field(() => [UsedInviteTokensScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UsedInviteTokensScalarWhereWithAggregatesInput>;

    @Field(() => [UsedInviteTokensScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UsedInviteTokensScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    token?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    usedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    tokenExpiresAt?: DateTimeWithAggregatesFilter;
}
