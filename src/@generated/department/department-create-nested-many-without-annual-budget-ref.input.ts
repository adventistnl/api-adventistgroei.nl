import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutAnnual_budget_refInput } from './department-create-without-annual-budget-ref.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutAnnual_budget_refInput } from './department-create-or-connect-without-annual-budget-ref.input';
import { DepartmentCreateManyAnnual_budget_refInputEnvelope } from './department-create-many-annual-budget-ref-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentCreateNestedManyWithoutAnnual_budget_refInput {

    @Field(() => [DepartmentCreateWithoutAnnual_budget_refInput], {nullable:true})
    @Type(() => DepartmentCreateWithoutAnnual_budget_refInput)
    create?: Array<DepartmentCreateWithoutAnnual_budget_refInput>;

    @Field(() => [DepartmentCreateOrConnectWithoutAnnual_budget_refInput], {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutAnnual_budget_refInput)
    connectOrCreate?: Array<DepartmentCreateOrConnectWithoutAnnual_budget_refInput>;

    @Field(() => DepartmentCreateManyAnnual_budget_refInputEnvelope, {nullable:true})
    @Type(() => DepartmentCreateManyAnnual_budget_refInputEnvelope)
    createMany?: DepartmentCreateManyAnnual_budget_refInputEnvelope;

    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>>;
}
