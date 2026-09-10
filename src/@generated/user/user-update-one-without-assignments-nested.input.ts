import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAssignmentsInput } from './user-create-without-assignments.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAssignmentsInput } from './user-create-or-connect-without-assignments.input';
import { UserUpsertWithoutAssignmentsInput } from './user-upsert-without-assignments.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutAssignmentsInput } from './user-update-to-one-with-where-without-assignments.input';

@InputType()
export class UserUpdateOneWithoutAssignmentsNestedInput {

    @Field(() => UserCreateWithoutAssignmentsInput, {nullable:true})
    @Type(() => UserCreateWithoutAssignmentsInput)
    create?: UserCreateWithoutAssignmentsInput;

    @Field(() => UserCreateOrConnectWithoutAssignmentsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAssignmentsInput)
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput;

    @Field(() => UserUpsertWithoutAssignmentsInput, {nullable:true})
    @Type(() => UserUpsertWithoutAssignmentsInput)
    upsert?: UserUpsertWithoutAssignmentsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutAssignmentsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutAssignmentsInput)
    update?: UserUpdateToOneWithWhereWithoutAssignmentsInput;
}
