import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UsedInviteTokensCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    token!: number;

    @Field(() => Int, {nullable:false})
    usedAt!: number;

    @Field(() => Int, {nullable:false})
    tokenExpiresAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
