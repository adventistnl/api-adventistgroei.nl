import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSubsidyRequestInput } from './user-create-without-subsidy-request.input';

@InputType()
export class UserCreateOrConnectWithoutSubsidyRequestInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutSubsidyRequestInput, {nullable:false})
    @Type(() => UserCreateWithoutSubsidyRequestInput)
    create!: UserCreateWithoutSubsidyRequestInput;
}
