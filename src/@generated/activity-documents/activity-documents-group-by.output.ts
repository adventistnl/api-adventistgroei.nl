import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ActivityDocumentsCountAggregate } from './activity-documents-count-aggregate.output';
import { ActivityDocumentsMinAggregate } from './activity-documents-min-aggregate.output';
import { ActivityDocumentsMaxAggregate } from './activity-documents-max-aggregate.output';

@ObjectType()
export class ActivityDocumentsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    activity_id!: string;

    @Field(() => String, {nullable:false})
    file_url!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => Boolean, {nullable:false})
    is_validated!: boolean;

    @Field(() => String, {nullable:false})
    uploaded_by!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:true})
    validated_at?: Date | string;

    @Field(() => ActivityDocumentsCountAggregate, {nullable:true})
    _count?: ActivityDocumentsCountAggregate;

    @Field(() => ActivityDocumentsMinAggregate, {nullable:true})
    _min?: ActivityDocumentsMinAggregate;

    @Field(() => ActivityDocumentsMaxAggregate, {nullable:true})
    _max?: ActivityDocumentsMaxAggregate;
}
