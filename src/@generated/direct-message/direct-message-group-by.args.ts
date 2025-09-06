import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DirectMessageWhereInput } from './direct-message-where.input';
import { Type } from 'class-transformer';
import { DirectMessageOrderByWithAggregationInput } from './direct-message-order-by-with-aggregation.input';
import { DirectMessageScalarFieldEnum } from './direct-message-scalar-field.enum';
import { DirectMessageScalarWhereWithAggregatesInput } from './direct-message-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DirectMessageCountAggregateInput } from './direct-message-count-aggregate.input';
import { DirectMessageMinAggregateInput } from './direct-message-min-aggregate.input';
import { DirectMessageMaxAggregateInput } from './direct-message-max-aggregate.input';

@ArgsType()
export class DirectMessageGroupByArgs {

    @Field(() => DirectMessageWhereInput, {nullable:true})
    @Type(() => DirectMessageWhereInput)
    where?: DirectMessageWhereInput;

    @Field(() => [DirectMessageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DirectMessageOrderByWithAggregationInput>;

    @Field(() => [DirectMessageScalarFieldEnum], {nullable:false})
    by!: Array<`${DirectMessageScalarFieldEnum}`>;

    @Field(() => DirectMessageScalarWhereWithAggregatesInput, {nullable:true})
    having?: DirectMessageScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DirectMessageCountAggregateInput, {nullable:true})
    _count?: DirectMessageCountAggregateInput;

    @Field(() => DirectMessageMinAggregateInput, {nullable:true})
    _min?: DirectMessageMinAggregateInput;

    @Field(() => DirectMessageMaxAggregateInput, {nullable:true})
    _max?: DirectMessageMaxAggregateInput;
}
