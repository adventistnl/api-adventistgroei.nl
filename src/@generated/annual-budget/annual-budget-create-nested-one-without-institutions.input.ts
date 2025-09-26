import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetCreateWithoutInstitutionsInput } from './annual-budget-create-without-institutions.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateOrConnectWithoutInstitutionsInput } from './annual-budget-create-or-connect-without-institutions.input';
import { Prisma } from '@prisma/client';
import { AnnualBudgetWhereUniqueInput } from './annual-budget-where-unique.input';

@InputType()
export class AnnualBudgetCreateNestedOneWithoutInstitutionsInput {

    @Field(() => AnnualBudgetCreateWithoutInstitutionsInput, {nullable:true})
    @Type(() => AnnualBudgetCreateWithoutInstitutionsInput)
    create?: AnnualBudgetCreateWithoutInstitutionsInput;

    @Field(() => AnnualBudgetCreateOrConnectWithoutInstitutionsInput, {nullable:true})
    @Type(() => AnnualBudgetCreateOrConnectWithoutInstitutionsInput)
    connectOrCreate?: AnnualBudgetCreateOrConnectWithoutInstitutionsInput;

    @Field(() => AnnualBudgetWhereUniqueInput, {nullable:true})
    @Type(() => AnnualBudgetWhereUniqueInput)
    connect?: Prisma.AtLeast<AnnualBudgetWhereUniqueInput, 'id'>;
}
