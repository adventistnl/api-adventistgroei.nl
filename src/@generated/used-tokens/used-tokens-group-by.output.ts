import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UsedTokensCountAggregate } from './used-tokens-count-aggregate.output';
import { UsedTokensMinAggregate } from './used-tokens-min-aggregate.output';
import { UsedTokensMaxAggregate } from './used-tokens-max-aggregate.output';

@ObjectType()
export class UsedTokensGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Date, {nullable:false})
    usedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    tokenExpiresAt!: Date | string;

    @Field(() => UsedTokensCountAggregate, {nullable:true})
    _count?: UsedTokensCountAggregate;

    @Field(() => UsedTokensMinAggregate, {nullable:true})
    _min?: UsedTokensMinAggregate;

    @Field(() => UsedTokensMaxAggregate, {nullable:true})
    _max?: UsedTokensMaxAggregate;
}
