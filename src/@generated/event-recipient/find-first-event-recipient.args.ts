import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventRecipientWhereInput } from './event-recipient-where.input';
import { Type } from 'class-transformer';
import { EventRecipientOrderByWithRelationInput } from './event-recipient-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EventRecipientWhereUniqueInput } from './event-recipient-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventRecipientScalarFieldEnum } from './event-recipient-scalar-field.enum';

@ArgsType()
export class FindFirstEventRecipientArgs {

    @Field(() => EventRecipientWhereInput, {nullable:true})
    @Type(() => EventRecipientWhereInput)
    where?: EventRecipientWhereInput;

    @Field(() => [EventRecipientOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventRecipientOrderByWithRelationInput>;

    @Field(() => EventRecipientWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EventRecipientWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EventRecipientScalarFieldEnum], {nullable:true})
    distinct?: Array<`${EventRecipientScalarFieldEnum}`>;
}
