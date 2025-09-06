import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DirectMessageRecipientWhereInput } from './direct-message-recipient-where.input';
import { Type } from 'class-transformer';
import { DirectMessageRecipientOrderByWithAggregationInput } from './direct-message-recipient-order-by-with-aggregation.input';
import { DirectMessageRecipientScalarFieldEnum } from './direct-message-recipient-scalar-field.enum';
import { DirectMessageRecipientScalarWhereWithAggregatesInput } from './direct-message-recipient-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DirectMessageRecipientCountAggregateInput } from './direct-message-recipient-count-aggregate.input';
import { DirectMessageRecipientMinAggregateInput } from './direct-message-recipient-min-aggregate.input';
import { DirectMessageRecipientMaxAggregateInput } from './direct-message-recipient-max-aggregate.input';

@ArgsType()
export class DirectMessageRecipientGroupByArgs {

    @Field(() => DirectMessageRecipientWhereInput, {nullable:true})
    @Type(() => DirectMessageRecipientWhereInput)
    where?: DirectMessageRecipientWhereInput;

    @Field(() => [DirectMessageRecipientOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DirectMessageRecipientOrderByWithAggregationInput>;

    @Field(() => [DirectMessageRecipientScalarFieldEnum], {nullable:false})
    by!: Array<`${DirectMessageRecipientScalarFieldEnum}`>;

    @Field(() => DirectMessageRecipientScalarWhereWithAggregatesInput, {nullable:true})
    having?: DirectMessageRecipientScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DirectMessageRecipientCountAggregateInput, {nullable:true})
    _count?: DirectMessageRecipientCountAggregateInput;

    @Field(() => DirectMessageRecipientMinAggregateInput, {nullable:true})
    _min?: DirectMessageRecipientMinAggregateInput;

    @Field(() => DirectMessageRecipientMaxAggregateInput, {nullable:true})
    _max?: DirectMessageRecipientMaxAggregateInput;
}
