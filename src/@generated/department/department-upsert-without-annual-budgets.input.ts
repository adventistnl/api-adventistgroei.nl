import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUpdateWithoutAnnual_budgetsInput } from './department-update-without-annual-budgets.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutAnnual_budgetsInput } from './department-create-without-annual-budgets.input';
import { DepartmentWhereInput } from './department-where.input';

@InputType()
export class DepartmentUpsertWithoutAnnual_budgetsInput {

    @Field(() => DepartmentUpdateWithoutAnnual_budgetsInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutAnnual_budgetsInput)
    update!: DepartmentUpdateWithoutAnnual_budgetsInput;

    @Field(() => DepartmentCreateWithoutAnnual_budgetsInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutAnnual_budgetsInput)
    create!: DepartmentCreateWithoutAnnual_budgetsInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;
}
