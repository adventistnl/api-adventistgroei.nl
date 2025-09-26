import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';
import { Type } from 'class-transformer';
import { AnnualBudgetUpdateWithoutDepartmentsInput } from './annual-budget-update-without-departments.input';

@InputType()
export class AnnualBudgetUpdateToOneWithWhereWithoutDepartmentsInput {

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    where?: AnnualBudgetWhereInput;

    @Field(() => AnnualBudgetUpdateWithoutDepartmentsInput, {nullable:false})
    @Type(() => AnnualBudgetUpdateWithoutDepartmentsInput)
    data!: AnnualBudgetUpdateWithoutDepartmentsInput;
}
