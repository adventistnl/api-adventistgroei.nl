import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutUsersInput } from './department-create-without-users.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutUsersInput } from './department-create-or-connect-without-users.input';
import { DepartmentUpsertWithoutUsersInput } from './department-upsert-without-users.input';
import { DepartmentWhereInput } from './department-where.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateToOneWithWhereWithoutUsersInput } from './department-update-to-one-with-where-without-users.input';

@InputType()
export class DepartmentUpdateOneWithoutUsersNestedInput {

    @Field(() => DepartmentCreateWithoutUsersInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutUsersInput)
    create?: DepartmentCreateWithoutUsersInput;

    @Field(() => DepartmentCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutUsersInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutUsersInput;

    @Field(() => DepartmentUpsertWithoutUsersInput, {nullable:true})
    @Type(() => DepartmentUpsertWithoutUsersInput)
    upsert?: DepartmentUpsertWithoutUsersInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    disconnect?: DepartmentWhereInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    delete?: DepartmentWhereInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentUpdateToOneWithWhereWithoutUsersInput, {nullable:true})
    @Type(() => DepartmentUpdateToOneWithWhereWithoutUsersInput)
    update?: DepartmentUpdateToOneWithWhereWithoutUsersInput;
}
