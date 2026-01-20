import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutSubsidy_status_historyInput } from './user-update-without-subsidy-status-history.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutSubsidy_status_historyInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutSubsidy_status_historyInput, {nullable:false})
    @Type(() => UserUpdateWithoutSubsidy_status_historyInput)
    data!: UserUpdateWithoutSubsidy_status_historyInput;
}
