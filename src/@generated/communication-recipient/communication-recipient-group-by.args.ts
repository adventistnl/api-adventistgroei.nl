import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunicationRecipientWhereInput } from './communication-recipient-where.input';
import { Type } from 'class-transformer';
import { CommunicationRecipientOrderByWithAggregationInput } from './communication-recipient-order-by-with-aggregation.input';
import { CommunicationRecipientScalarFieldEnum } from './communication-recipient-scalar-field.enum';
import { CommunicationRecipientScalarWhereWithAggregatesInput } from './communication-recipient-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CommunicationRecipientCountAggregateInput } from './communication-recipient-count-aggregate.input';
import { CommunicationRecipientMinAggregateInput } from './communication-recipient-min-aggregate.input';
import { CommunicationRecipientMaxAggregateInput } from './communication-recipient-max-aggregate.input';

@ArgsType()
export class CommunicationRecipientGroupByArgs {

    @Field(() => CommunicationRecipientWhereInput, {nullable:true})
    @Type(() => CommunicationRecipientWhereInput)
    where?: CommunicationRecipientWhereInput;

    @Field(() => [CommunicationRecipientOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CommunicationRecipientOrderByWithAggregationInput>;

    @Field(() => [CommunicationRecipientScalarFieldEnum], {nullable:false})
    by!: Array<`${CommunicationRecipientScalarFieldEnum}`>;

    @Field(() => CommunicationRecipientScalarWhereWithAggregatesInput, {nullable:true})
    having?: CommunicationRecipientScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CommunicationRecipientCountAggregateInput, {nullable:true})
    _count?: CommunicationRecipientCountAggregateInput;

    @Field(() => CommunicationRecipientMinAggregateInput, {nullable:true})
    _min?: CommunicationRecipientMinAggregateInput;

    @Field(() => CommunicationRecipientMaxAggregateInput, {nullable:true})
    _max?: CommunicationRecipientMaxAggregateInput;
}
