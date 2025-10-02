import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutProject_activitiesInput } from './user-update-without-project-activities.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProject_activitiesInput } from './user-create-without-project-activities.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutProject_activitiesInput {

    @Field(() => UserUpdateWithoutProject_activitiesInput, {nullable:false})
    @Type(() => UserUpdateWithoutProject_activitiesInput)
    update!: UserUpdateWithoutProject_activitiesInput;

    @Field(() => UserCreateWithoutProject_activitiesInput, {nullable:false})
    @Type(() => UserCreateWithoutProject_activitiesInput)
    create!: UserCreateWithoutProject_activitiesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
