import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutSubsidyStatusInput } from './user-update-without-subsidy-status.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutSubsidyStatusInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutSubsidyStatusInput, {nullable:false})
    @Type(() => UserUpdateWithoutSubsidyStatusInput)
    data!: UserUpdateWithoutSubsidyStatusInput;
}
