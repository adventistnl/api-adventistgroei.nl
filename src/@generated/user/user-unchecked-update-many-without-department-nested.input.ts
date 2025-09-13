import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDepartmentInput } from './user-create-without-department.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDepartmentInput } from './user-create-or-connect-without-department.input';
import { UserUpsertWithWhereUniqueWithoutDepartmentInput } from './user-upsert-with-where-unique-without-department.input';
import { UserCreateManyDepartmentInputEnvelope } from './user-create-many-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutDepartmentInput } from './user-update-with-where-unique-without-department.input';
import { UserUpdateManyWithWhereWithoutDepartmentInput } from './user-update-many-with-where-without-department.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutDepartmentNestedInput {

    @Field(() => [UserCreateWithoutDepartmentInput], {nullable:true})
    @Type(() => UserCreateWithoutDepartmentInput)
    create?: Array<UserCreateWithoutDepartmentInput>;

    @Field(() => [UserCreateOrConnectWithoutDepartmentInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutDepartmentInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutDepartmentInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutDepartmentInput>;

    @Field(() => UserCreateManyDepartmentInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyDepartmentInputEnvelope)
    createMany?: UserCreateManyDepartmentInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutDepartmentInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutDepartmentInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutDepartmentInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutDepartmentInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutDepartmentInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
