import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ContactCountAggregate } from './contact-count-aggregate.output';
import { ContactMinAggregate } from './contact-min-aggregate.output';
import { ContactMaxAggregate } from './contact-max-aggregate.output';

@ObjectType()
export class AggregateContact {

    @Field(() => ContactCountAggregate, {nullable:true})
    _count?: ContactCountAggregate;

    @Field(() => ContactMinAggregate, {nullable:true})
    _min?: ContactMinAggregate;

    @Field(() => ContactMaxAggregate, {nullable:true})
    _max?: ContactMaxAggregate;
}
