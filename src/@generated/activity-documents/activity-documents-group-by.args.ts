import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityDocumentsWhereInput } from './activity-documents-where.input';
import { Type } from 'class-transformer';
import { ActivityDocumentsOrderByWithAggregationInput } from './activity-documents-order-by-with-aggregation.input';
import { ActivityDocumentsScalarFieldEnum } from './activity-documents-scalar-field.enum';
import { ActivityDocumentsScalarWhereWithAggregatesInput } from './activity-documents-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ActivityDocumentsCountAggregateInput } from './activity-documents-count-aggregate.input';
import { ActivityDocumentsMinAggregateInput } from './activity-documents-min-aggregate.input';
import { ActivityDocumentsMaxAggregateInput } from './activity-documents-max-aggregate.input';

@ArgsType()
export class ActivityDocumentsGroupByArgs {

    @Field(() => ActivityDocumentsWhereInput, {nullable:true})
    @Type(() => ActivityDocumentsWhereInput)
    where?: ActivityDocumentsWhereInput;

    @Field(() => [ActivityDocumentsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ActivityDocumentsOrderByWithAggregationInput>;

    @Field(() => [ActivityDocumentsScalarFieldEnum], {nullable:false})
    by!: Array<`${ActivityDocumentsScalarFieldEnum}`>;

    @Field(() => ActivityDocumentsScalarWhereWithAggregatesInput, {nullable:true})
    having?: ActivityDocumentsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ActivityDocumentsCountAggregateInput, {nullable:true})
    _count?: ActivityDocumentsCountAggregateInput;

    @Field(() => ActivityDocumentsMinAggregateInput, {nullable:true})
    _min?: ActivityDocumentsMinAggregateInput;

    @Field(() => ActivityDocumentsMaxAggregateInput, {nullable:true})
    _max?: ActivityDocumentsMaxAggregateInput;
}
