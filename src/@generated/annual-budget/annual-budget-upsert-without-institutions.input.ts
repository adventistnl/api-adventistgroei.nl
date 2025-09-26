import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetUpdateWithoutInstitutionsInput } from './annual-budget-update-without-institutions.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateWithoutInstitutionsInput } from './annual-budget-create-without-institutions.input';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';

@InputType()
export class AnnualBudgetUpsertWithoutInstitutionsInput {

    @Field(() => AnnualBudgetUpdateWithoutInstitutionsInput, {nullable:false})
    @Type(() => AnnualBudgetUpdateWithoutInstitutionsInput)
    update!: AnnualBudgetUpdateWithoutInstitutionsInput;

    @Field(() => AnnualBudgetCreateWithoutInstitutionsInput, {nullable:false})
    @Type(() => AnnualBudgetCreateWithoutInstitutionsInput)
    create!: AnnualBudgetCreateWithoutInstitutionsInput;

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    where?: AnnualBudgetWhereInput;
}
