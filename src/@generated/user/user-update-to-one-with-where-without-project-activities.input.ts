import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutProject_activitiesInput } from './user-update-without-project-activities.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutProject_activitiesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutProject_activitiesInput, {nullable:false})
    @Type(() => UserUpdateWithoutProject_activitiesInput)
    data!: UserUpdateWithoutProject_activitiesInput;
}
