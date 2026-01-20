import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUncheckedCreateNestedManyWithoutDepartmentInput } from '../project/project-unchecked-create-nested-many-without-department.input';
import { Type } from 'class-transformer';
import { ProjectUncheckedCreateNestedManyWithoutChurch_departmentInput } from '../project/project-unchecked-create-nested-many-without-church-department.input';
import { AnnualReportUncheckedCreateNestedManyWithoutDepartmentInput } from '../annual-report/annual-report-unchecked-create-nested-many-without-department.input';
import { SubsidyRequestUncheckedCreateNestedManyWithoutDepartmentInput } from '../subsidy-request/subsidy-request-unchecked-create-nested-many-without-department.input';
import { UserUncheckedCreateNestedManyWithoutDepartmentInput } from '../user/user-unchecked-create-nested-many-without-department.input';
import { AnnualBudgetUncheckedCreateNestedManyWithoutDepartmentInput } from '../annual-budget/annual-budget-unchecked-create-nested-many-without-department.input';

@InputType()
export class DepartmentUncheckedCreateWithoutSubsidy_statusesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:true})
    church_id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    leader_id!: string;

    @Field(() => String, {nullable:true})
    contact_id?: string;

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

    @Field(() => ProjectUncheckedCreateNestedManyWithoutDepartmentInput, {nullable:true})
    @Type(() => ProjectUncheckedCreateNestedManyWithoutDepartmentInput)
    projects?: ProjectUncheckedCreateNestedManyWithoutDepartmentInput;

    @Field(() => ProjectUncheckedCreateNestedManyWithoutChurch_departmentInput, {nullable:true})
    @Type(() => ProjectUncheckedCreateNestedManyWithoutChurch_departmentInput)
    church_projects?: ProjectUncheckedCreateNestedManyWithoutChurch_departmentInput;

    @Field(() => AnnualReportUncheckedCreateNestedManyWithoutDepartmentInput, {nullable:true})
    annual_reports?: AnnualReportUncheckedCreateNestedManyWithoutDepartmentInput;

    @Field(() => SubsidyRequestUncheckedCreateNestedManyWithoutDepartmentInput, {nullable:true})
    @Type(() => SubsidyRequestUncheckedCreateNestedManyWithoutDepartmentInput)
    subsidy_requests?: SubsidyRequestUncheckedCreateNestedManyWithoutDepartmentInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutDepartmentInput, {nullable:true})
    @Type(() => UserUncheckedCreateNestedManyWithoutDepartmentInput)
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput;

    @Field(() => AnnualBudgetUncheckedCreateNestedManyWithoutDepartmentInput, {nullable:true})
    @Type(() => AnnualBudgetUncheckedCreateNestedManyWithoutDepartmentInput)
    annual_budgets?: AnnualBudgetUncheckedCreateNestedManyWithoutDepartmentInput;
}
