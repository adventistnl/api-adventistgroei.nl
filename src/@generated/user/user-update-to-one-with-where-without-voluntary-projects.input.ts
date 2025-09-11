import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutVoluntary_projectsInput } from './user-update-without-voluntary-projects.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutVoluntary_projectsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutVoluntary_projectsInput, {nullable:false})
    @Type(() => UserUpdateWithoutVoluntary_projectsInput)
    data!: UserUpdateWithoutVoluntary_projectsInput;
}
