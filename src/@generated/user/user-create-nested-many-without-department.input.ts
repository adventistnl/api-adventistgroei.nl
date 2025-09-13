import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDepartmentInput } from './user-create-without-department.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDepartmentInput } from './user-create-or-connect-without-department.input';
import { UserCreateManyDepartmentInputEnvelope } from './user-create-many-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutDepartmentInput {

    @Field(() => [UserCreateWithoutDepartmentInput], {nullable:true})
    @Type(() => UserCreateWithoutDepartmentInput)
    create?: Array<UserCreateWithoutDepartmentInput>;

    @Field(() => [UserCreateOrConnectWithoutDepartmentInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutDepartmentInput>;

    @Field(() => UserCreateManyDepartmentInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyDepartmentInputEnvelope)
    createMany?: UserCreateManyDepartmentInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
}
