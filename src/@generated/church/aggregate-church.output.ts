import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ChurchCountAggregate } from './church-count-aggregate.output';
import { ChurchMinAggregate } from './church-min-aggregate.output';
import { ChurchMaxAggregate } from './church-max-aggregate.output';

@ObjectType()
export class AggregateChurch {

    @Field(() => ChurchCountAggregate, {nullable:true})
    _count?: ChurchCountAggregate;

    @Field(() => ChurchMinAggregate, {nullable:true})
    _min?: ChurchMinAggregate;

    @Field(() => ChurchMaxAggregate, {nullable:true})
    _max?: ChurchMaxAggregate;
}
