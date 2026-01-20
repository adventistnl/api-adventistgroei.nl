import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSubsidy_status_historyInput } from './user-create-without-subsidy-status-history.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSubsidy_status_historyInput } from './user-create-or-connect-without-subsidy-status-history.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutSubsidy_status_historyInput {

    @Field(() => UserCreateWithoutSubsidy_status_historyInput, {nullable:true})
    @Type(() => UserCreateWithoutSubsidy_status_historyInput)
    create?: UserCreateWithoutSubsidy_status_historyInput;

    @Field(() => UserCreateOrConnectWithoutSubsidy_status_historyInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSubsidy_status_historyInput)
    connectOrCreate?: UserCreateOrConnectWithoutSubsidy_status_historyInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
