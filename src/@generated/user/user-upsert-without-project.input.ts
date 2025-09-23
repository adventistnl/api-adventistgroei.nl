import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutProjectInput } from './user-update-without-project.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProjectInput } from './user-create-without-project.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutProjectInput {

    @Field(() => UserUpdateWithoutProjectInput, {nullable:false})
    @Type(() => UserUpdateWithoutProjectInput)
    update!: UserUpdateWithoutProjectInput;

    @Field(() => UserCreateWithoutProjectInput, {nullable:false})
    @Type(() => UserCreateWithoutProjectInput)
    create!: UserCreateWithoutProjectInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
