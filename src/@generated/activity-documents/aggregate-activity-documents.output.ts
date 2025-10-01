import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ActivityDocumentsCountAggregate } from './activity-documents-count-aggregate.output';
import { ActivityDocumentsMinAggregate } from './activity-documents-min-aggregate.output';
import { ActivityDocumentsMaxAggregate } from './activity-documents-max-aggregate.output';

@ObjectType()
export class AggregateActivityDocuments {

    @Field(() => ActivityDocumentsCountAggregate, {nullable:true})
    _count?: ActivityDocumentsCountAggregate;

    @Field(() => ActivityDocumentsMinAggregate, {nullable:true})
    _min?: ActivityDocumentsMinAggregate;

    @Field(() => ActivityDocumentsMaxAggregate, {nullable:true})
    _max?: ActivityDocumentsMaxAggregate;
}
