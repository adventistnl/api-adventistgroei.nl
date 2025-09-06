import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutSubsidy_requestsInput } from './department-create-without-subsidy-requests.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutSubsidy_requestsInput } from './department-create-or-connect-without-subsidy-requests.input';
import { DepartmentUpsertWithoutSubsidy_requestsInput } from './department-upsert-without-subsidy-requests.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateToOneWithWhereWithoutSubsidy_requestsInput } from './department-update-to-one-with-where-without-subsidy-requests.input';

@InputType()
export class DepartmentUpdateOneRequiredWithoutSubsidy_requestsNestedInput {

    @Field(() => DepartmentCreateWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutSubsidy_requestsInput)
    create?: DepartmentCreateWithoutSubsidy_requestsInput;

    @Field(() => DepartmentCreateOrConnectWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutSubsidy_requestsInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutSubsidy_requestsInput;

    @Field(() => DepartmentUpsertWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => DepartmentUpsertWithoutSubsidy_requestsInput)
    upsert?: DepartmentUpsertWithoutSubsidy_requestsInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentUpdateToOneWithWhereWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => DepartmentUpdateToOneWithWhereWithoutSubsidy_requestsInput)
    update?: DepartmentUpdateToOneWithWhereWithoutSubsidy_requestsInput;
}
