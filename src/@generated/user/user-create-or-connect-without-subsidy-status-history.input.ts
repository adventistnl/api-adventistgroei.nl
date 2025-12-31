import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSubsidy_status_historyInput } from './user-create-without-subsidy-status-history.input';

@InputType()
export class UserCreateOrConnectWithoutSubsidy_status_historyInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutSubsidy_status_historyInput, {nullable:false})
    @Type(() => UserCreateWithoutSubsidy_status_historyInput)
    create!: UserCreateWithoutSubsidy_status_historyInput;
}
