import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateWithoutDirect_message_recipientsInput } from './role-update-without-direct-message-recipients.input';
import { Type } from 'class-transformer';
import { RoleCreateWithoutDirect_message_recipientsInput } from './role-create-without-direct-message-recipients.input';
import { RoleWhereInput } from './role-where.input';

@InputType()
export class RoleUpsertWithoutDirect_message_recipientsInput {

    @Field(() => RoleUpdateWithoutDirect_message_recipientsInput, {nullable:false})
    @Type(() => RoleUpdateWithoutDirect_message_recipientsInput)
    update!: RoleUpdateWithoutDirect_message_recipientsInput;

    @Field(() => RoleCreateWithoutDirect_message_recipientsInput, {nullable:false})
    @Type(() => RoleCreateWithoutDirect_message_recipientsInput)
    create!: RoleCreateWithoutDirect_message_recipientsInput;

    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: RoleWhereInput;
}
