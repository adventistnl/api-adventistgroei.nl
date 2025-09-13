import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutUsersInput } from './department-create-without-users.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutUsersInput } from './department-create-or-connect-without-users.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentCreateNestedOneWithoutUsersInput {

    @Field(() => DepartmentCreateWithoutUsersInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutUsersInput)
    create?: DepartmentCreateWithoutUsersInput;

    @Field(() => DepartmentCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutUsersInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutUsersInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;
}
