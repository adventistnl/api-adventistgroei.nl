import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { InstitutionPositionCountAggregate } from './institution-position-count-aggregate.output';
import { InstitutionPositionMinAggregate } from './institution-position-min-aggregate.output';
import { InstitutionPositionMaxAggregate } from './institution-position-max-aggregate.output';

@ObjectType()
export class AggregateInstitutionPosition {

    @Field(() => InstitutionPositionCountAggregate, {nullable:true})
    _count?: InstitutionPositionCountAggregate;

    @Field(() => InstitutionPositionMinAggregate, {nullable:true})
    _min?: InstitutionPositionMinAggregate;

    @Field(() => InstitutionPositionMaxAggregate, {nullable:true})
    _max?: InstitutionPositionMaxAggregate;
}
