import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunicationRecipientWhereInput } from './communication-recipient-where.input';
import { Type } from 'class-transformer';
import { CommunicationRecipientOrderByWithRelationInput } from './communication-recipient-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CommunicationRecipientWhereUniqueInput } from './communication-recipient-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CommunicationRecipientCountAggregateInput } from './communication-recipient-count-aggregate.input';
import { CommunicationRecipientMinAggregateInput } from './communication-recipient-min-aggregate.input';
import { CommunicationRecipientMaxAggregateInput } from './communication-recipient-max-aggregate.input';

@ArgsType()
export class CommunicationRecipientAggregateArgs {

    @Field(() => CommunicationRecipientWhereInput, {nullable:true})
    @Type(() => CommunicationRecipientWhereInput)
    where?: CommunicationRecipientWhereInput;

    @Field(() => [CommunicationRecipientOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommunicationRecipientOrderByWithRelationInput>;

    @Field(() => CommunicationRecipientWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommunicationRecipientWhereUniqueInput, 'id'>;

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
