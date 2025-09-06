import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateNestedOneWithoutAnnual_reportsInput } from '../department/department-create-nested-one-without-annual-reports.input';
import { Type } from 'class-transformer';

@InputType()
export class AnnualReportCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:false})
    file_path!: string;

    @Field(() => Date, {nullable:false})
    submission_date!: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => DepartmentCreateNestedOneWithoutAnnual_reportsInput, {nullable:false})
    @Type(() => DepartmentCreateNestedOneWithoutAnnual_reportsInput)
    department!: DepartmentCreateNestedOneWithoutAnnual_reportsInput;
}
