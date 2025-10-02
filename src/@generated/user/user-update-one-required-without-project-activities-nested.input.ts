import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProject_activitiesInput } from './user-create-without-project-activities.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProject_activitiesInput } from './user-create-or-connect-without-project-activities.input';
import { UserUpsertWithoutProject_activitiesInput } from './user-upsert-without-project-activities.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutProject_activitiesInput } from './user-update-to-one-with-where-without-project-activities.input';

@InputType()
export class UserUpdateOneRequiredWithoutProject_activitiesNestedInput {

    @Field(() => UserCreateWithoutProject_activitiesInput, {nullable:true})
    @Type(() => UserCreateWithoutProject_activitiesInput)
    create?: UserCreateWithoutProject_activitiesInput;

    @Field(() => UserCreateOrConnectWithoutProject_activitiesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProject_activitiesInput)
    connectOrCreate?: UserCreateOrConnectWithoutProject_activitiesInput;

    @Field(() => UserUpsertWithoutProject_activitiesInput, {nullable:true})
    @Type(() => UserUpsertWithoutProject_activitiesInput)
    upsert?: UserUpsertWithoutProject_activitiesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutProject_activitiesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutProject_activitiesInput)
    update?: UserUpdateToOneWithWhereWithoutProject_activitiesInput;
}
