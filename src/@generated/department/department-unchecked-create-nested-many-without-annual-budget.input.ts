import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutAnnual_budgetInput } from './department-create-without-annual-budget.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutAnnual_budgetInput } from './department-create-or-connect-without-annual-budget.input';
import { DepartmentCreateManyAnnual_budgetInputEnvelope } from './department-create-many-annual-budget-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentUncheckedCreateNestedManyWithoutAnnual_budgetInput {

    @Field(() => [DepartmentCreateWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => DepartmentCreateWithoutAnnual_budgetInput)
    create?: Array<DepartmentCreateWithoutAnnual_budgetInput>;

    @Field(() => [DepartmentCreateOrConnectWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutAnnual_budgetInput)
    connectOrCreate?: Array<DepartmentCreateOrConnectWithoutAnnual_budgetInput>;

    @Field(() => DepartmentCreateManyAnnual_budgetInputEnvelope, {nullable:true})
    @Type(() => DepartmentCreateManyAnnual_budgetInputEnvelope)
    createMany?: DepartmentCreateManyAnnual_budgetInputEnvelope;

    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>>;
}
