import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutSubsidyRequestInput } from './user-update-without-subsidy-request.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutSubsidyRequestInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutSubsidyRequestInput, {nullable:false})
    @Type(() => UserUpdateWithoutSubsidyRequestInput)
    data!: UserUpdateWithoutSubsidyRequestInput;
}
