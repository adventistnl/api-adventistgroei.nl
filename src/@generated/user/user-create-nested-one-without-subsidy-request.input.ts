import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSubsidyRequestInput } from './user-create-without-subsidy-request.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSubsidyRequestInput } from './user-create-or-connect-without-subsidy-request.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutSubsidyRequestInput {

    @Field(() => UserCreateWithoutSubsidyRequestInput, {nullable:true})
    @Type(() => UserCreateWithoutSubsidyRequestInput)
    create?: UserCreateWithoutSubsidyRequestInput;

    @Field(() => UserCreateOrConnectWithoutSubsidyRequestInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSubsidyRequestInput)
    connectOrCreate?: UserCreateOrConnectWithoutSubsidyRequestInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
