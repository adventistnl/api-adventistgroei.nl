import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DirectMessageCountAggregate } from './direct-message-count-aggregate.output';
import { DirectMessageMinAggregate } from './direct-message-min-aggregate.output';
import { DirectMessageMaxAggregate } from './direct-message-max-aggregate.output';

@ObjectType()
export class AggregateDirectMessage {

    @Field(() => DirectMessageCountAggregate, {nullable:true})
    _count?: DirectMessageCountAggregate;

    @Field(() => DirectMessageMinAggregate, {nullable:true})
    _min?: DirectMessageMinAggregate;

    @Field(() => DirectMessageMaxAggregate, {nullable:true})
    _max?: DirectMessageMaxAggregate;
}
