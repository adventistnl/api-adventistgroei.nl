import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UsedTokensWhereInput {

    @Field(() => [UsedTokensWhereInput], {nullable:true})
    AND?: Array<UsedTokensWhereInput>;

    @Field(() => [UsedTokensWhereInput], {nullable:true})
    OR?: Array<UsedTokensWhereInput>;

    @Field(() => [UsedTokensWhereInput], {nullable:true})
    NOT?: Array<UsedTokensWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    token?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    usedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    tokenExpiresAt?: DateTimeFilter;
}
