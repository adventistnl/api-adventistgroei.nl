import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutAnnual_budgetInput } from './institution-create-without-annual-budget.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutAnnual_budgetInput } from './institution-create-or-connect-without-annual-budget.input';
import { InstitutionUpsertWithWhereUniqueWithoutAnnual_budgetInput } from './institution-upsert-with-where-unique-without-annual-budget.input';
import { InstitutionCreateManyAnnual_budgetInputEnvelope } from './institution-create-many-annual-budget-input-envelope.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { InstitutionUpdateWithWhereUniqueWithoutAnnual_budgetInput } from './institution-update-with-where-unique-without-annual-budget.input';
import { InstitutionUpdateManyWithWhereWithoutAnnual_budgetInput } from './institution-update-many-with-where-without-annual-budget.input';
import { InstitutionScalarWhereInput } from './institution-scalar-where.input';

@InputType()
export class InstitutionUpdateManyWithoutAnnual_budgetNestedInput {

    @Field(() => [InstitutionCreateWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => InstitutionCreateWithoutAnnual_budgetInput)
    create?: Array<InstitutionCreateWithoutAnnual_budgetInput>;

    @Field(() => [InstitutionCreateOrConnectWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutAnnual_budgetInput)
    connectOrCreate?: Array<InstitutionCreateOrConnectWithoutAnnual_budgetInput>;

    @Field(() => [InstitutionUpsertWithWhereUniqueWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => InstitutionUpsertWithWhereUniqueWithoutAnnual_budgetInput)
    upsert?: Array<InstitutionUpsertWithWhereUniqueWithoutAnnual_budgetInput>;

    @Field(() => InstitutionCreateManyAnnual_budgetInputEnvelope, {nullable:true})
    @Type(() => InstitutionCreateManyAnnual_budgetInputEnvelope)
    createMany?: InstitutionCreateManyAnnual_budgetInputEnvelope;

    @Field(() => [InstitutionWhereUniqueInput], {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>>;

    @Field(() => [InstitutionWhereUniqueInput], {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>>;

    @Field(() => [InstitutionWhereUniqueInput], {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>>;

    @Field(() => [InstitutionWhereUniqueInput], {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>>;

    @Field(() => [InstitutionUpdateWithWhereUniqueWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => InstitutionUpdateWithWhereUniqueWithoutAnnual_budgetInput)
    update?: Array<InstitutionUpdateWithWhereUniqueWithoutAnnual_budgetInput>;

    @Field(() => [InstitutionUpdateManyWithWhereWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => InstitutionUpdateManyWithWhereWithoutAnnual_budgetInput)
    updateMany?: Array<InstitutionUpdateManyWithWhereWithoutAnnual_budgetInput>;

    @Field(() => [InstitutionScalarWhereInput], {nullable:true})
    @Type(() => InstitutionScalarWhereInput)
    deleteMany?: Array<InstitutionScalarWhereInput>;
}
