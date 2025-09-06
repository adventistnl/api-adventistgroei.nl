import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleCreateWithoutUserInput } from './user-role-create-without-user.input';
import { Type } from 'class-transformer';
import { UserRoleCreateOrConnectWithoutUserInput } from './user-role-create-or-connect-without-user.input';
import { UserRoleUpsertWithWhereUniqueWithoutUserInput } from './user-role-upsert-with-where-unique-without-user.input';
import { UserRoleCreateManyUserInputEnvelope } from './user-role-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserRoleWhereUniqueInput } from './user-role-where-unique.input';
import { UserRoleUpdateWithWhereUniqueWithoutUserInput } from './user-role-update-with-where-unique-without-user.input';
import { UserRoleUpdateManyWithWhereWithoutUserInput } from './user-role-update-many-with-where-without-user.input';
import { UserRoleScalarWhereInput } from './user-role-scalar-where.input';

@InputType()
export class UserRoleUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [UserRoleCreateWithoutUserInput], {nullable:true})
    @Type(() => UserRoleCreateWithoutUserInput)
    create?: Array<UserRoleCreateWithoutUserInput>;

    @Field(() => [UserRoleCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserRoleCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserRoleCreateOrConnectWithoutUserInput>;

    @Field(() => [UserRoleUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserRoleUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserRoleUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserRoleCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserRoleCreateManyUserInputEnvelope)
    createMany?: UserRoleCreateManyUserInputEnvelope;

    @Field(() => [UserRoleWhereUniqueInput], {nullable:true})
    @Type(() => UserRoleWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserRoleWhereUniqueInput, 'id'>>;

    @Field(() => [UserRoleWhereUniqueInput], {nullable:true})
    @Type(() => UserRoleWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserRoleWhereUniqueInput, 'id'>>;

    @Field(() => [UserRoleWhereUniqueInput], {nullable:true})
    @Type(() => UserRoleWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserRoleWhereUniqueInput, 'id'>>;

    @Field(() => [UserRoleWhereUniqueInput], {nullable:true})
    @Type(() => UserRoleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserRoleWhereUniqueInput, 'id'>>;

    @Field(() => [UserRoleUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserRoleUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserRoleUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserRoleUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserRoleUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserRoleUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserRoleScalarWhereInput], {nullable:true})
    @Type(() => UserRoleScalarWhereInput)
    deleteMany?: Array<UserRoleScalarWhereInput>;
}
