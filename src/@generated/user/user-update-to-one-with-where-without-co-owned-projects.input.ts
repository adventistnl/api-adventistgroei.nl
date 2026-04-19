import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutCo_owned_projectsInput } from './user-update-without-co-owned-projects.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutCo_owned_projectsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutCo_owned_projectsInput, {nullable:false})
    @Type(() => UserUpdateWithoutCo_owned_projectsInput)
    data!: UserUpdateWithoutCo_owned_projectsInput;
}
