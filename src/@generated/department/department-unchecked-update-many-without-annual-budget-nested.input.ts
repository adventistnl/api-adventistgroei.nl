import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutAnnual_budgetInput } from './department-create-without-annual-budget.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutAnnual_budgetInput } from './department-create-or-connect-without-annual-budget.input';
import { DepartmentUpsertWithWhereUniqueWithoutAnnual_budgetInput } from './department-upsert-with-where-unique-without-annual-budget.input';
import { DepartmentCreateManyAnnual_budgetInputEnvelope } from './department-create-many-annual-budget-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateWithWhereUniqueWithoutAnnual_budgetInput } from './department-update-with-where-unique-without-annual-budget.input';
import { DepartmentUpdateManyWithWhereWithoutAnnual_budgetInput } from './department-update-many-with-where-without-annual-budget.input';
import { DepartmentScalarWhereInput } from './department-scalar-where.input';

@InputType()
export class DepartmentUncheckedUpdateManyWithoutAnnual_budgetNestedInput {

    @Field(() => [DepartmentCreateWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => DepartmentCreateWithoutAnnual_budgetInput)
    create?: Array<DepartmentCreateWithoutAnnual_budgetInput>;

    @Field(() => [DepartmentCreateOrConnectWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutAnnual_budgetInput)
    connectOrCreate?: Array<DepartmentCreateOrConnectWithoutAnnual_budgetInput>;

    @Field(() => [DepartmentUpsertWithWhereUniqueWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => DepartmentUpsertWithWhereUniqueWithoutAnnual_budgetInput)
    upsert?: Array<DepartmentUpsertWithWhereUniqueWithoutAnnual_budgetInput>;

    @Field(() => DepartmentCreateManyAnnual_budgetInputEnvelope, {nullable:true})
    @Type(() => DepartmentCreateManyAnnual_budgetInputEnvelope)
    createMany?: DepartmentCreateManyAnnual_budgetInputEnvelope;

    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>>;

    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>>;

    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>>;

    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>>;

    @Field(() => [DepartmentUpdateWithWhereUniqueWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => DepartmentUpdateWithWhereUniqueWithoutAnnual_budgetInput)
    update?: Array<DepartmentUpdateWithWhereUniqueWithoutAnnual_budgetInput>;

    @Field(() => [DepartmentUpdateManyWithWhereWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => DepartmentUpdateManyWithWhereWithoutAnnual_budgetInput)
    updateMany?: Array<DepartmentUpdateManyWithWhereWithoutAnnual_budgetInput>;

    @Field(() => [DepartmentScalarWhereInput], {nullable:true})
    @Type(() => DepartmentScalarWhereInput)
    deleteMany?: Array<DepartmentScalarWhereInput>;
}
