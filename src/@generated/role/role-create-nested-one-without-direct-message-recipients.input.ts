import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutDirect_message_recipientsInput } from './role-create-without-direct-message-recipients.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutDirect_message_recipientsInput } from './role-create-or-connect-without-direct-message-recipients.input';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class RoleCreateNestedOneWithoutDirect_message_recipientsInput {

    @Field(() => RoleCreateWithoutDirect_message_recipientsInput, {nullable:true})
    @Type(() => RoleCreateWithoutDirect_message_recipientsInput)
    create?: RoleCreateWithoutDirect_message_recipientsInput;

    @Field(() => RoleCreateOrConnectWithoutDirect_message_recipientsInput, {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutDirect_message_recipientsInput)
    connectOrCreate?: RoleCreateOrConnectWithoutDirect_message_recipientsInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'key_code'>;
}
