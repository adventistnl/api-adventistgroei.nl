import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutSubsidy_requestsInput } from './department-create-without-subsidy-requests.input';

@InputType()
export class DepartmentCreateOrConnectWithoutSubsidy_requestsInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentCreateWithoutSubsidy_requestsInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutSubsidy_requestsInput)
    create!: DepartmentCreateWithoutSubsidy_requestsInput;
}
