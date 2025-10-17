import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UsedTokensCountAggregate } from './used-tokens-count-aggregate.output';
import { UsedTokensMinAggregate } from './used-tokens-min-aggregate.output';
import { UsedTokensMaxAggregate } from './used-tokens-max-aggregate.output';

@ObjectType()
export class AggregateUsedTokens {

    @Field(() => UsedTokensCountAggregate, {nullable:true})
    _count?: UsedTokensCountAggregate;

    @Field(() => UsedTokensMinAggregate, {nullable:true})
    _min?: UsedTokensMinAggregate;

    @Field(() => UsedTokensMaxAggregate, {nullable:true})
    _max?: UsedTokensMaxAggregate;
}
