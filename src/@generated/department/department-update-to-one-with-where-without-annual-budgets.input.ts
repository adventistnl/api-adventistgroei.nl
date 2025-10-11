import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { Type } from 'class-transformer';
import { DepartmentUpdateWithoutAnnual_budgetsInput } from './department-update-without-annual-budgets.input';

@InputType()
export class DepartmentUpdateToOneWithWhereWithoutAnnual_budgetsInput {

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;

    @Field(() => DepartmentUpdateWithoutAnnual_budgetsInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutAnnual_budgetsInput)
    data!: DepartmentUpdateWithoutAnnual_budgetsInput;
}
