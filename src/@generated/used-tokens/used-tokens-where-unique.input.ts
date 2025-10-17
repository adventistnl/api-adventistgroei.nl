import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsedTokensWhereInput } from './used-tokens-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UsedTokensWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    token?: string;

    @Field(() => [UsedTokensWhereInput], {nullable:true})
    AND?: Array<UsedTokensWhereInput>;

    @Field(() => [UsedTokensWhereInput], {nullable:true})
    OR?: Array<UsedTokensWhereInput>;

    @Field(() => [UsedTokensWhereInput], {nullable:true})
    NOT?: Array<UsedTokensWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    usedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    tokenExpiresAt?: DateTimeFilter;
}
