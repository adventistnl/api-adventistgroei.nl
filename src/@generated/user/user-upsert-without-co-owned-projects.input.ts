import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCo_owned_projectsInput } from './user-update-without-co-owned-projects.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCo_owned_projectsInput } from './user-create-without-co-owned-projects.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutCo_owned_projectsInput {

    @Field(() => UserUpdateWithoutCo_owned_projectsInput, {nullable:false})
    @Type(() => UserUpdateWithoutCo_owned_projectsInput)
    update!: UserUpdateWithoutCo_owned_projectsInput;

    @Field(() => UserCreateWithoutCo_owned_projectsInput, {nullable:false})
    @Type(() => UserCreateWithoutCo_owned_projectsInput)
    create!: UserCreateWithoutCo_owned_projectsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
