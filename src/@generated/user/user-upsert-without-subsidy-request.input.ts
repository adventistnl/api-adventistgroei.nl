import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutSubsidyRequestInput } from './user-update-without-subsidy-request.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSubsidyRequestInput } from './user-create-without-subsidy-request.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutSubsidyRequestInput {

    @Field(() => UserUpdateWithoutSubsidyRequestInput, {nullable:false})
    @Type(() => UserUpdateWithoutSubsidyRequestInput)
    update!: UserUpdateWithoutSubsidyRequestInput;

    @Field(() => UserCreateWithoutSubsidyRequestInput, {nullable:false})
    @Type(() => UserCreateWithoutSubsidyRequestInput)
    create!: UserCreateWithoutSubsidyRequestInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
