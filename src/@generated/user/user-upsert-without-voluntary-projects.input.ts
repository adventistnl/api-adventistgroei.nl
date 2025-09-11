import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutVoluntary_projectsInput } from './user-update-without-voluntary-projects.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutVoluntary_projectsInput } from './user-create-without-voluntary-projects.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutVoluntary_projectsInput {

    @Field(() => UserUpdateWithoutVoluntary_projectsInput, {nullable:false})
    @Type(() => UserUpdateWithoutVoluntary_projectsInput)
    update!: UserUpdateWithoutVoluntary_projectsInput;

    @Field(() => UserCreateWithoutVoluntary_projectsInput, {nullable:false})
    @Type(() => UserCreateWithoutVoluntary_projectsInput)
    create!: UserCreateWithoutVoluntary_projectsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
