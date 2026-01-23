import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ChurchCountAggregate } from './church-count-aggregate.output';
import { ChurchAvgAggregate } from './church-avg-aggregate.output';
import { ChurchSumAggregate } from './church-sum-aggregate.output';
import { ChurchMinAggregate } from './church-min-aggregate.output';
import { ChurchMaxAggregate } from './church-max-aggregate.output';

@ObjectType()
export class AggregateChurch {

    @Field(() => ChurchCountAggregate, {nullable:true})
    _count?: ChurchCountAggregate;

    @Field(() => ChurchAvgAggregate, {nullable:true})
    _avg?: ChurchAvgAggregate;

    @Field(() => ChurchSumAggregate, {nullable:true})
    _sum?: ChurchSumAggregate;

    @Field(() => ChurchMinAggregate, {nullable:true})
    _min?: ChurchMinAggregate;

    @Field(() => ChurchMaxAggregate, {nullable:true})
    _max?: ChurchMaxAggregate;
}
