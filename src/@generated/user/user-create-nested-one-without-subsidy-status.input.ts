import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSubsidyStatusInput } from './user-create-without-subsidy-status.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSubsidyStatusInput } from './user-create-or-connect-without-subsidy-status.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutSubsidyStatusInput {

    @Field(() => UserCreateWithoutSubsidyStatusInput, {nullable:true})
    @Type(() => UserCreateWithoutSubsidyStatusInput)
    create?: UserCreateWithoutSubsidyStatusInput;

    @Field(() => UserCreateOrConnectWithoutSubsidyStatusInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSubsidyStatusInput)
    connectOrCreate?: UserCreateOrConnectWithoutSubsidyStatusInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
