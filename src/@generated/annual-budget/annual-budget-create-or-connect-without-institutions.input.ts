import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateWithoutInstitutionsInput } from './annual-budget-create-without-institutions.input';

@InputType()
export class AnnualBudgetCreateOrConnectWithoutInstitutionsInput {

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:false})
    @Type(() => AnnualBudgetWhereUniqueInput)
    where!: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;

    @Field(() => AnnualBudgetCreateWithoutInstitutionsInput, {nullable:false})
    @Type(() => AnnualBudgetCreateWithoutInstitutionsInput)
    create!: AnnualBudgetCreateWithoutInstitutionsInput;
}
