import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';
import { Type } from 'class-transformer';
import { AnnualBudgetUpdateWithoutInstitutionsInput } from './annual-budget-update-without-institutions.input';

@InputType()
export class AnnualBudgetUpdateToOneWithWhereWithoutInstitutionsInput {

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    where?: AnnualBudgetWhereInput;

    @Field(() => AnnualBudgetUpdateWithoutInstitutionsInput, {nullable:false})
    @Type(() => AnnualBudgetUpdateWithoutInstitutionsInput)
    data!: AnnualBudgetUpdateWithoutInstitutionsInput;
}
