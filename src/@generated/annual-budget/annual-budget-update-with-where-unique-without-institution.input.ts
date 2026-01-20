import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { Type } from 'class-transformer';
import { AnnualBudgetUpdateWithoutInstitutionInput } from './annual-budget-update-without-institution.input';

@InputType()
export class AnnualBudgetUpdateWithWhereUniqueWithoutInstitutionInput {

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:false})
    @Type(() => AnnualBudgetWhereUniqueInput)
    where!: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => AnnualBudgetUpdateWithoutInstitutionInput)
    data!: AnnualBudgetUpdateWithoutInstitutionInput;
}
