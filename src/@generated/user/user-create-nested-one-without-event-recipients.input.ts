import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEvent_recipientsInput } from './user-create-without-event-recipients.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutEvent_recipientsInput } from './user-create-or-connect-without-event-recipients.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutEvent_recipientsInput {

    @Field(() => UserCreateWithoutEvent_recipientsInput, {nullable:true})
    @Type(() => UserCreateWithoutEvent_recipientsInput)
    create?: UserCreateWithoutEvent_recipientsInput;

    @Field(() => UserCreateOrConnectWithoutEvent_recipientsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutEvent_recipientsInput)
    connectOrCreate?: UserCreateOrConnectWithoutEvent_recipientsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
