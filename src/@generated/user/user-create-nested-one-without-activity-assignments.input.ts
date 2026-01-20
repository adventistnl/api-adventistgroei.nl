import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutActivity_assignmentsInput } from './user-create-without-activity-assignments.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutActivity_assignmentsInput } from './user-create-or-connect-without-activity-assignments.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutActivity_assignmentsInput {

    @Field(() => UserCreateWithoutActivity_assignmentsInput, {nullable:true})
    @Type(() => UserCreateWithoutActivity_assignmentsInput)
    create?: UserCreateWithoutActivity_assignmentsInput;

    @Field(() => UserCreateOrConnectWithoutActivity_assignmentsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutActivity_assignmentsInput)
    connectOrCreate?: UserCreateOrConnectWithoutActivity_assignmentsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
