import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutProject_historyInput } from './user-update-without-project-history.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutProject_historyInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutProject_historyInput, {nullable:false})
    @Type(() => UserUpdateWithoutProject_historyInput)
    data!: UserUpdateWithoutProject_historyInput;
}
