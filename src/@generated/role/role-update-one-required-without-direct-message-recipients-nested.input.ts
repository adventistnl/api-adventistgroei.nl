import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutDirect_message_recipientsInput } from './role-create-without-direct-message-recipients.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutDirect_message_recipientsInput } from './role-create-or-connect-without-direct-message-recipients.input';
import { RoleUpsertWithoutDirect_message_recipientsInput } from './role-upsert-without-direct-message-recipients.input';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateToOneWithWhereWithoutDirect_message_recipientsInput } from './role-update-to-one-with-where-without-direct-message-recipients.input';

@InputType()
export class RoleUpdateOneRequiredWithoutDirect_message_recipientsNestedInput {

    @Field(() => RoleCreateWithoutDirect_message_recipientsInput, {nullable:true})
    @Type(() => RoleCreateWithoutDirect_message_recipientsInput)
    create?: RoleCreateWithoutDirect_message_recipientsInput;

    @Field(() => RoleCreateOrConnectWithoutDirect_message_recipientsInput, {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutDirect_message_recipientsInput)
    connectOrCreate?: RoleCreateOrConnectWithoutDirect_message_recipientsInput;

    @Field(() => RoleUpsertWithoutDirect_message_recipientsInput, {nullable:true})
    @Type(() => RoleUpsertWithoutDirect_message_recipientsInput)
    upsert?: RoleUpsertWithoutDirect_message_recipientsInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'key_code'>;

    @Field(() => RoleUpdateToOneWithWhereWithoutDirect_message_recipientsInput, {nullable:true})
    @Type(() => RoleUpdateToOneWithWhereWithoutDirect_message_recipientsInput)
    update?: RoleUpdateToOneWithWhereWithoutDirect_message_recipientsInput;
}
