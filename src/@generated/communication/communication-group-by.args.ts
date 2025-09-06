import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunicationWhereInput } from './communication-where.input';
import { Type } from 'class-transformer';
import { CommunicationOrderByWithAggregationInput } from './communication-order-by-with-aggregation.input';
import { CommunicationScalarFieldEnum } from './communication-scalar-field.enum';
import { CommunicationScalarWhereWithAggregatesInput } from './communication-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CommunicationCountAggregateInput } from './communication-count-aggregate.input';
import { CommunicationMinAggregateInput } from './communication-min-aggregate.input';
import { CommunicationMaxAggregateInput } from './communication-max-aggregate.input';

@ArgsType()
export class CommunicationGroupByArgs {

    @Field(() => CommunicationWhereInput, {nullable:true})
    @Type(() => CommunicationWhereInput)
    where?: CommunicationWhereInput;

    @Field(() => [CommunicationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CommunicationOrderByWithAggregationInput>;

    @Field(() => [CommunicationScalarFieldEnum], {nullable:false})
    by!: Array<`${CommunicationScalarFieldEnum}`>;

    @Field(() => CommunicationScalarWhereWithAggregatesInput, {nullable:true})
    having?: CommunicationScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CommunicationCountAggregateInput, {nullable:true})
    _count?: CommunicationCountAggregateInput;

    @Field(() => CommunicationMinAggregateInput, {nullable:true})
    _min?: CommunicationMinAggregateInput;

    @Field(() => CommunicationMaxAggregateInput, {nullable:true})
    _max?: CommunicationMaxAggregateInput;
}
