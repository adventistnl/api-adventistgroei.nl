import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUpdateWithoutAnnual_reportsInput } from './department-update-without-annual-reports.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutAnnual_reportsInput } from './department-create-without-annual-reports.input';
import { DepartmentWhereInput } from './department-where.input';

@InputType()
export class DepartmentUpsertWithoutAnnual_reportsInput {

    @Field(() => DepartmentUpdateWithoutAnnual_reportsInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutAnnual_reportsInput)
    update!: DepartmentUpdateWithoutAnnual_reportsInput;

    @Field(() => DepartmentCreateWithoutAnnual_reportsInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutAnnual_reportsInput)
    create!: DepartmentCreateWithoutAnnual_reportsInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;
}
