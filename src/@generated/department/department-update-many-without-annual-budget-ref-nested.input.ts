import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutAnnual_budget_refInput } from './department-create-without-annual-budget-ref.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutAnnual_budget_refInput } from './department-create-or-connect-without-annual-budget-ref.input';
import { DepartmentUpsertWithWhereUniqueWithoutAnnual_budget_refInput } from './department-upsert-with-where-unique-without-annual-budget-ref.input';
import { DepartmentCreateManyAnnual_budget_refInputEnvelope } from './department-create-many-annual-budget-ref-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateWithWhereUniqueWithoutAnnual_budget_refInput } from './department-update-with-where-unique-without-annual-budget-ref.input';
import { DepartmentUpdateManyWithWhereWithoutAnnual_budget_refInput } from './department-update-many-with-where-without-annual-budget-ref.input';
import { DepartmentScalarWhereInput } from './department-scalar-where.input';

@InputType()
export class DepartmentUpdateManyWithoutAnnual_budget_refNestedInput {

    @Field(() => [DepartmentCreateWithoutAnnual_budget_refInput], {nullable:true})
    @Type(() => DepartmentCreateWithoutAnnual_budget_refInput)
    create?: Array<DepartmentCreateWithoutAnnual_budget_refInput>;

    @Field(() => [DepartmentCreateOrConnectWithoutAnnual_budget_refInput], {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutAnnual_budget_refInput)
    connectOrCreate?: Array<DepartmentCreateOrConnectWithoutAnnual_budget_refInput>;

    @Field(() => [DepartmentUpsertWithWhereUniqueWithoutAnnual_budget_refInput], {nullable:true})
    @Type(() => DepartmentUpsertWithWhereUniqueWithoutAnnual_budget_refInput)
    upsert?: Array<DepartmentUpsertWithWhereUniqueWithoutAnnual_budget_refInput>;

    @Field(() => DepartmentCreateManyAnnual_budget_refInputEnvelope, {nullable:true})
    @Type(() => DepartmentCreateManyAnnual_budget_refInputEnvelope)
    createMany?: DepartmentCreateManyAnnual_budget_refInputEnvelope;

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

    @Field(() => [DepartmentUpdateWithWhereUniqueWithoutAnnual_budget_refInput], {nullable:true})
    @Type(() => DepartmentUpdateWithWhereUniqueWithoutAnnual_budget_refInput)
    update?: Array<DepartmentUpdateWithWhereUniqueWithoutAnnual_budget_refInput>;

    @Field(() => [DepartmentUpdateManyWithWhereWithoutAnnual_budget_refInput], {nullable:true})
    @Type(() => DepartmentUpdateManyWithWhereWithoutAnnual_budget_refInput)
    updateMany?: Array<DepartmentUpdateManyWithWhereWithoutAnnual_budget_refInput>;

    @Field(() => [DepartmentScalarWhereInput], {nullable:true})
    @Type(() => DepartmentScalarWhereInput)
    deleteMany?: Array<DepartmentScalarWhereInput>;
}
