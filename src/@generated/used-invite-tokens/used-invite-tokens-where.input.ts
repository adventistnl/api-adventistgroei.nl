import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UsedInviteTokensWhereInput {

    @Field(() => [UsedInviteTokensWhereInput], {nullable:true})
    AND?: Array<UsedInviteTokensWhereInput>;

    @Field(() => [UsedInviteTokensWhereInput], {nullable:true})
    OR?: Array<UsedInviteTokensWhereInput>;

    @Field(() => [UsedInviteTokensWhereInput], {nullable:true})
    NOT?: Array<UsedInviteTokensWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    token?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    usedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    tokenExpiresAt?: DateTimeFilter;
}
