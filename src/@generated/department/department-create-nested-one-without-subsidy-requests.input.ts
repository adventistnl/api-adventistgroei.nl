import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutSubsidy_requestsInput } from './department-create-without-subsidy-requests.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutSubsidy_requestsInput } from './department-create-or-connect-without-subsidy-requests.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentCreateNestedOneWithoutSubsidy_requestsInput {

    @Field(() => DepartmentCreateWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutSubsidy_requestsInput)
    create?: DepartmentCreateWithoutSubsidy_requestsInput;

    @Field(() => DepartmentCreateOrConnectWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutSubsidy_requestsInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutSubsidy_requestsInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;
}
