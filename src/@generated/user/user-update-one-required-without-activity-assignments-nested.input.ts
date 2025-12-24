import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutActivity_assignmentsInput } from './user-create-without-activity-assignments.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutActivity_assignmentsInput } from './user-create-or-connect-without-activity-assignments.input';
import { UserUpsertWithoutActivity_assignmentsInput } from './user-upsert-without-activity-assignments.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutActivity_assignmentsInput } from './user-update-to-one-with-where-without-activity-assignments.input';

@InputType()
export class UserUpdateOneRequiredWithoutActivity_assignmentsNestedInput {

    @Field(() => UserCreateWithoutActivity_assignmentsInput, {nullable:true})
    @Type(() => UserCreateWithoutActivity_assignmentsInput)
    create?: UserCreateWithoutActivity_assignmentsInput;

    @Field(() => UserCreateOrConnectWithoutActivity_assignmentsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutActivity_assignmentsInput)
    connectOrCreate?: UserCreateOrConnectWithoutActivity_assignmentsInput;

    @Field(() => UserUpsertWithoutActivity_assignmentsInput, {nullable:true})
    @Type(() => UserUpsertWithoutActivity_assignmentsInput)
    upsert?: UserUpsertWithoutActivity_assignmentsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutActivity_assignmentsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutActivity_assignmentsInput)
    update?: UserUpdateToOneWithWhereWithoutActivity_assignmentsInput;
}
