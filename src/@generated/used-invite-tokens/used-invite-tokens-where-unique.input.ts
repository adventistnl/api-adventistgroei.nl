import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsedInviteTokensWhereInput } from './used-invite-tokens-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UsedInviteTokensWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    token?: string;

    @Field(() => [UsedInviteTokensWhereInput], {nullable:true})
    AND?: Array<UsedInviteTokensWhereInput>;

    @Field(() => [UsedInviteTokensWhereInput], {nullable:true})
    OR?: Array<UsedInviteTokensWhereInput>;

    @Field(() => [UsedInviteTokensWhereInput], {nullable:true})
    NOT?: Array<UsedInviteTokensWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    usedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    tokenExpiresAt?: DateTimeFilter;
}
