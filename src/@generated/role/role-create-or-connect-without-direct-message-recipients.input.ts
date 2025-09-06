import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { Type } from 'class-transformer';
import { RoleCreateWithoutDirect_message_recipientsInput } from './role-create-without-direct-message-recipients.input';

@InputType()
export class RoleCreateOrConnectWithoutDirect_message_recipientsInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'key_code'>;

    @Field(() => RoleCreateWithoutDirect_message_recipientsInput, {nullable:false})
    @Type(() => RoleCreateWithoutDirect_message_recipientsInput)
    create!: RoleCreateWithoutDirect_message_recipientsInput;
}
