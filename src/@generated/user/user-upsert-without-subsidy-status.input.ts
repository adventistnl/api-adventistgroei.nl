import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutSubsidyStatusInput } from './user-update-without-subsidy-status.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSubsidyStatusInput } from './user-create-without-subsidy-status.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutSubsidyStatusInput {

    @Field(() => UserUpdateWithoutSubsidyStatusInput, {nullable:false})
    @Type(() => UserUpdateWithoutSubsidyStatusInput)
    update!: UserUpdateWithoutSubsidyStatusInput;

    @Field(() => UserCreateWithoutSubsidyStatusInput, {nullable:false})
    @Type(() => UserCreateWithoutSubsidyStatusInput)
    create!: UserCreateWithoutSubsidyStatusInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
