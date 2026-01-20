import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UsedInviteTokensCountAggregate } from './used-invite-tokens-count-aggregate.output';
import { UsedInviteTokensMinAggregate } from './used-invite-tokens-min-aggregate.output';
import { UsedInviteTokensMaxAggregate } from './used-invite-tokens-max-aggregate.output';

@ObjectType()
export class AggregateUsedInviteTokens {

    @Field(() => UsedInviteTokensCountAggregate, {nullable:true})
    _count?: UsedInviteTokensCountAggregate;

    @Field(() => UsedInviteTokensMinAggregate, {nullable:true})
    _min?: UsedInviteTokensMinAggregate;

    @Field(() => UsedInviteTokensMaxAggregate, {nullable:true})
    _max?: UsedInviteTokensMaxAggregate;
}
