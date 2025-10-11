import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateWithoutInstitutionInput } from './annual-budget-create-without-institution.input';

@InputType()
export class AnnualBudgetCreateOrConnectWithoutInstitutionInput {

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:false})
    @Type(() => AnnualBudgetWhereUniqueInput)
    where!: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => AnnualBudgetCreateWithoutInstitutionInput)
    create!: AnnualBudgetCreateWithoutInstitutionInput;
}
