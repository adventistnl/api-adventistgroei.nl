import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CommunicationCountAggregate } from './communication-count-aggregate.output';
import { CommunicationMinAggregate } from './communication-min-aggregate.output';
import { CommunicationMaxAggregate } from './communication-max-aggregate.output';

@ObjectType()
export class AggregateCommunication {

    @Field(() => CommunicationCountAggregate, {nullable:true})
    _count?: CommunicationCountAggregate;

    @Field(() => CommunicationMinAggregate, {nullable:true})
    _min?: CommunicationMinAggregate;

    @Field(() => CommunicationMaxAggregate, {nullable:true})
    _max?: CommunicationMaxAggregate;
}
