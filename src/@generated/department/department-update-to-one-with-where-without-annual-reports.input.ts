import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { Type } from 'class-transformer';
import { DepartmentUpdateWithoutAnnual_reportsInput } from './department-update-without-annual-reports.input';

@InputType()
export class DepartmentUpdateToOneWithWhereWithoutAnnual_reportsInput {

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;

    @Field(() => DepartmentUpdateWithoutAnnual_reportsInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutAnnual_reportsInput)
    data!: DepartmentUpdateWithoutAnnual_reportsInput;
}
