import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UsedInviteTokensMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    token?: string;

    @Field(() => Date, {nullable:true})
    usedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    tokenExpiresAt?: Date | string;
}
