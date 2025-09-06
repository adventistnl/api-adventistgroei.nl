import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereInput } from './role-where.input';
import { Type } from 'class-transformer';
import { RoleUpdateWithoutDirect_message_recipientsInput } from './role-update-without-direct-message-recipients.input';

@InputType()
export class RoleUpdateToOneWithWhereWithoutDirect_message_recipientsInput {

    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: RoleWhereInput;

    @Field(() => RoleUpdateWithoutDirect_message_recipientsInput, {nullable:false})
    @Type(() => RoleUpdateWithoutDirect_message_recipientsInput)
    data!: RoleUpdateWithoutDirect_message_recipientsInput;
}
