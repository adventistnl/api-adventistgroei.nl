import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { InstitutionCountAggregate } from './institution-count-aggregate.output';
import { InstitutionMinAggregate } from './institution-min-aggregate.output';
import { InstitutionMaxAggregate } from './institution-max-aggregate.output';

@ObjectType()
export class AggregateInstitution {

    @Field(() => InstitutionCountAggregate, {nullable:true})
    _count?: InstitutionCountAggregate;

    @Field(() => InstitutionMinAggregate, {nullable:true})
    _min?: InstitutionMinAggregate;

    @Field(() => InstitutionMaxAggregate, {nullable:true})
    _max?: InstitutionMaxAggregate;
}
