import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSubsidyRequestInput } from './user-create-without-subsidy-request.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSubsidyRequestInput } from './user-create-or-connect-without-subsidy-request.input';
import { UserUpsertWithoutSubsidyRequestInput } from './user-upsert-without-subsidy-request.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutSubsidyRequestInput } from './user-update-to-one-with-where-without-subsidy-request.input';

@InputType()
export class UserUpdateOneRequiredWithoutSubsidyRequestNestedInput {

    @Field(() => UserCreateWithoutSubsidyRequestInput, {nullable:true})
    @Type(() => UserCreateWithoutSubsidyRequestInput)
    create?: UserCreateWithoutSubsidyRequestInput;

    @Field(() => UserCreateOrConnectWithoutSubsidyRequestInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSubsidyRequestInput)
    connectOrCreate?: UserCreateOrConnectWithoutSubsidyRequestInput;

    @Field(() => UserUpsertWithoutSubsidyRequestInput, {nullable:true})
    @Type(() => UserUpsertWithoutSubsidyRequestInput)
    upsert?: UserUpsertWithoutSubsidyRequestInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutSubsidyRequestInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutSubsidyRequestInput)
    update?: UserUpdateToOneWithWhereWithoutSubsidyRequestInput;
}
