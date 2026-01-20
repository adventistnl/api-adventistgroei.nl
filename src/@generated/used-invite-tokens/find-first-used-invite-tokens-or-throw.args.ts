import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedInviteTokensWhereInput } from './used-invite-tokens-where.input';
import { Type } from 'class-transformer';
import { UsedInviteTokensOrderByWithRelationInput } from './used-invite-tokens-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UsedInviteTokensWhereUniqueInput } from './used-invite-tokens-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UsedInviteTokensScalarFieldEnum } from './used-invite-tokens-scalar-field.enum';

@ArgsType()
export class FindFirstUsedInviteTokensOrThrowArgs {

    @Field(() => UsedInviteTokensWhereInput, {nullable:true})
    @Type(() => UsedInviteTokensWhereInput)
    where?: UsedInviteTokensWhereInput;

    @Field(() => [UsedInviteTokensOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UsedInviteTokensOrderByWithRelationInput>;

    @Field(() => UsedInviteTokensWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UsedInviteTokensWhereUniqueInput, 'id' | 'token'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UsedInviteTokensScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UsedInviteTokensScalarFieldEnum}`>;
}
