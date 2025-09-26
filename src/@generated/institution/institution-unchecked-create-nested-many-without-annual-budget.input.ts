import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutAnnual_budgetInput } from './institution-create-without-annual-budget.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutAnnual_budgetInput } from './institution-create-or-connect-without-annual-budget.input';
import { InstitutionCreateManyAnnual_budgetInputEnvelope } from './institution-create-many-annual-budget-input-envelope.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';

@InputType()
export class InstitutionUncheckedCreateNestedManyWithoutAnnual_budgetInput {

    @Field(() => [InstitutionCreateWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => InstitutionCreateWithoutAnnual_budgetInput)
    create?: Array<InstitutionCreateWithoutAnnual_budgetInput>;

    @Field(() => [InstitutionCreateOrConnectWithoutAnnual_budgetInput], {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutAnnual_budgetInput)
    connectOrCreate?: Array<InstitutionCreateOrConnectWithoutAnnual_budgetInput>;

    @Field(() => InstitutionCreateManyAnnual_budgetInputEnvelope, {nullable:true})
    @Type(() => InstitutionCreateManyAnnual_budgetInputEnvelope)
    createMany?: InstitutionCreateManyAnnual_budgetInputEnvelope;

    @Field(() => [InstitutionWhereUniqueInput], {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>>;
}
