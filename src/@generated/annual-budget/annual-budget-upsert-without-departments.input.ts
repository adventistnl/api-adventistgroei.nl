import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnnualBudgetUpdateWithoutDepartmentsInput } from './annual-budget-update-without-departments.input';
import { Type } from 'class-transformer';
import { AnnualBudgetCreateWithoutDepartmentsInput } from './annual-budget-create-without-departments.input';
import { AnnualBudgetWhereInput } from './annual-budget-where.input';

@InputType()
export class AnnualBudgetUpsertWithoutDepartmentsInput {

    @Field(() => AnnualBudgetUpdateWithoutDepartmentsInput, {nullable:false})
    @Type(() => AnnualBudgetUpdateWithoutDepartmentsInput)
    update!: AnnualBudgetUpdateWithoutDepartmentsInput;

    @Field(() => AnnualBudgetCreateWithoutDepartmentsInput, {nullable:false})
    @Type(() => AnnualBudgetCreateWithoutDepartmentsInput)
    create!: AnnualBudgetCreateWithoutDepartmentsInput;

    @Field(() => AnnualBudgetWhereInput, {nullable:true})
    @Type(() => AnnualBudgetWhereInput)
    where?: AnnualBudgetWhereInput;
}
