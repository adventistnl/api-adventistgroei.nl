import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DirectMessageRecipientWhereInput } from './direct-message-recipient-where.input';
import { Type } from 'class-transformer';
import { DirectMessageRecipientOrderByWithRelationInput } from './direct-message-recipient-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DirectMessageRecipientWhereUniqueInput } from './direct-message-recipient-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DirectMessageRecipientCountAggregateInput } from './direct-message-recipient-count-aggregate.input';
import { DirectMessageRecipientMinAggregateInput } from './direct-message-recipient-min-aggregate.input';
import { DirectMessageRecipientMaxAggregateInput } from './direct-message-recipient-max-aggregate.input';

@ArgsType()
export class DirectMessageRecipientAggregateArgs {

    @Field(() => DirectMessageRecipientWhereInput, {nullable:true})
    @Type(() => DirectMessageRecipientWhereInput)
    where?: DirectMessageRecipientWhereInput;

    @Field(() => [DirectMessageRecipientOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DirectMessageRecipientOrderByWithRelationInput>;

    @Field(() => DirectMessageRecipientWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DirectMessageRecipientWhereUniqueInput, 'id'>;

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
