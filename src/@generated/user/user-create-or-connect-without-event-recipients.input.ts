import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutEvent_recipientsInput } from './user-create-without-event-recipients.input';

@InputType()
export class UserCreateOrConnectWithoutEvent_recipientsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutEvent_recipientsInput, {nullable:false})
    @Type(() => UserCreateWithoutEvent_recipientsInput)
    create!: UserCreateWithoutEvent_recipientsInput;
}
