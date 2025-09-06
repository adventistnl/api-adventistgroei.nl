import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleCreateWithoutUserInput } from './user-role-create-without-user.input';
import { Type } from 'class-transformer';
import { UserRoleCreateOrConnectWithoutUserInput } from './user-role-create-or-connect-without-user.input';
import { UserRoleCreateManyUserInputEnvelope } from './user-role-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserRoleWhereUniqueInput } from './user-role-where-unique.input';

@InputType()
export class UserRoleUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [UserRoleCreateWithoutUserInput], {nullable:true})
    @Type(() => UserRoleCreateWithoutUserInput)
    create?: Array<UserRoleCreateWithoutUserInput>;

    @Field(() => [UserRoleCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserRoleCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserRoleCreateOrConnectWithoutUserInput>;

    @Field(() => UserRoleCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserRoleCreateManyUserInputEnvelope)
    createMany?: UserRoleCreateManyUserInputEnvelope;

    @Field(() => [UserRoleWhereUniqueInput], {nullable:true})
    @Type(() => UserRoleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserRoleWhereUniqueInput, 'id'>>;
}
