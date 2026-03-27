import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutProject_historyInput } from './user-update-without-project-history.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProject_historyInput } from './user-create-without-project-history.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutProject_historyInput {

    @Field(() => UserUpdateWithoutProject_historyInput, {nullable:false})
    @Type(() => UserUpdateWithoutProject_historyInput)
    update!: UserUpdateWithoutProject_historyInput;

    @Field(() => UserCreateWithoutProject_historyInput, {nullable:false})
    @Type(() => UserCreateWithoutProject_historyInput)
    create!: UserCreateWithoutProject_historyInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
