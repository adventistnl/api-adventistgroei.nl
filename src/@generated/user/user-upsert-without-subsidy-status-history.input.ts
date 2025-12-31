import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutSubsidy_status_historyInput } from './user-update-without-subsidy-status-history.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSubsidy_status_historyInput } from './user-create-without-subsidy-status-history.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutSubsidy_status_historyInput {

    @Field(() => UserUpdateWithoutSubsidy_status_historyInput, {nullable:false})
    @Type(() => UserUpdateWithoutSubsidy_status_historyInput)
    update!: UserUpdateWithoutSubsidy_status_historyInput;

    @Field(() => UserCreateWithoutSubsidy_status_historyInput, {nullable:false})
    @Type(() => UserCreateWithoutSubsidy_status_historyInput)
    create!: UserCreateWithoutSubsidy_status_historyInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
