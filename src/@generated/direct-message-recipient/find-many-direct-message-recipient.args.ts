import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DirectMessageRecipientWhereInput } from './direct-message-recipient-where.input';
import { Type } from 'class-transformer';
import { DirectMessageRecipientOrderByWithRelationInput } from './direct-message-recipient-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DirectMessageRecipientWhereUniqueInput } from './direct-message-recipient-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DirectMessageRecipientScalarFieldEnum } from './direct-message-recipient-scalar-field.enum';

@ArgsType()
export class FindManyDirectMessageRecipientArgs {

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

    @Field(() => [DirectMessageRecipientScalarFieldEnum], {nullable:true})
    distinct?: Array<`${DirectMessageRecipientScalarFieldEnum}`>;
}
