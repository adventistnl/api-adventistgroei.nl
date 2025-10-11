import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateWithoutInstitutionInput } from './annual-budget-create-without-institution.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateOrConnectWithoutInstitutionInput } from './annual-budget-create-or-connect-without-institution.input';
import { AnnualBudgetCreateManyInstitutionInputEnvelope } from './annual-budget-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';

@InputType()
export class AnnualBudgetCreateNestedManyWithoutInstitutionInput {

    @Field(() => [AnnualBudgetCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => AnnualBudgetCreateWithoutInstitutionInput)
    create?: Array<AnnualBudgetCreateWithoutInstitutionInput>;

    @Field(() => [AnnualBudgetCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => AnnualBudgetCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<AnnualBudgetCreateOrConnectWithoutInstitutionInput>;

    @Field(() => AnnualBudgetCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => AnnualBudgetCreateManyInstitutionInputEnvelope)
    createMany?: AnnualBudgetCreateManyInstitutionInputEnvelope;

    @Field(() => [AnnualBudgetWhereUniqueInput], {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>>;
}
