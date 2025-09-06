import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSubsidyStatusInput } from './user-create-without-subsidy-status.input';

@InputType()
export class UserCreateOrConnectWithoutSubsidyStatusInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutSubsidyStatusInput, {nullable:false})
    @Type(() => UserCreateWithoutSubsidyStatusInput)
    create!: UserCreateWithoutSubsidyStatusInput;
}
