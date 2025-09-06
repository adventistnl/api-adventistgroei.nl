import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEvent_recipientsInput } from './user-create-without-event-recipients.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutEvent_recipientsInput } from './user-create-or-connect-without-event-recipients.input';
import { UserUpsertWithoutEvent_recipientsInput } from './user-upsert-without-event-recipients.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutEvent_recipientsInput } from './user-update-to-one-with-where-without-event-recipients.input';

@InputType()
export class UserUpdateOneWithoutEvent_recipientsNestedInput {

    @Field(() => UserCreateWithoutEvent_recipientsInput, {nullable:true})
    @Type(() => UserCreateWithoutEvent_recipientsInput)
    create?: UserCreateWithoutEvent_recipientsInput;

    @Field(() => UserCreateOrConnectWithoutEvent_recipientsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutEvent_recipientsInput)
    connectOrCreate?: UserCreateOrConnectWithoutEvent_recipientsInput;

    @Field(() => UserUpsertWithoutEvent_recipientsInput, {nullable:true})
    @Type(() => UserUpsertWithoutEvent_recipientsInput)
    upsert?: UserUpsertWithoutEvent_recipientsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutEvent_recipientsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutEvent_recipientsInput)
    update?: UserUpdateToOneWithWhereWithoutEvent_recipientsInput;
}
