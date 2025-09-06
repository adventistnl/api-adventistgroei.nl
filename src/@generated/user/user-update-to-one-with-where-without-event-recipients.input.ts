import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutEvent_recipientsInput } from './user-update-without-event-recipients.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutEvent_recipientsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutEvent_recipientsInput, {nullable:false})
    @Type(() => UserUpdateWithoutEvent_recipientsInput)
    data!: UserUpdateWithoutEvent_recipientsInput;
}
