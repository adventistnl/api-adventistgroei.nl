import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { SubsidyStatusUncheckedCreateNestedManyWithoutDepartmentInput } from '../subsidy-status/subsidy-status-unchecked-create-nested-many-without-department.input';
import { MissionProjectUncheckedCreateNestedManyWithoutDepartmentInput } from '../mission-project/mission-project-unchecked-create-nested-many-without-department.input';
import { AnnualReportUncheckedCreateNestedManyWithoutDepartmentInput } from '../annual-report/annual-report-unchecked-create-nested-many-without-department.input';
import { SubsidyRequestUncheckedCreateNestedManyWithoutDepartmentInput } from '../subsidy-request/subsidy-request-unchecked-create-nested-many-without-department.input';

@InputType()
export class DepartmentUncheckedCreateWithoutContactInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    church_id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    annual_budget!: Decimal;

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

    @Field(() => SubsidyStatusUncheckedCreateNestedManyWithoutDepartmentInput, {nullable:true})
    @Type(() => SubsidyStatusUncheckedCreateNestedManyWithoutDepartmentInput)
    subsidy_statuses?: SubsidyStatusUncheckedCreateNestedManyWithoutDepartmentInput;

    @Field(() => MissionProjectUncheckedCreateNestedManyWithoutDepartmentInput, {nullable:true})
    @Type(() => MissionProjectUncheckedCreateNestedManyWithoutDepartmentInput)
    mission_projects?: MissionProjectUncheckedCreateNestedManyWithoutDepartmentInput;

    @Field(() => AnnualReportUncheckedCreateNestedManyWithoutDepartmentInput, {nullable:true})
    @Type(() => AnnualReportUncheckedCreateNestedManyWithoutDepartmentInput)
    annual_reports?: AnnualReportUncheckedCreateNestedManyWithoutDepartmentInput;

    @Field(() => SubsidyRequestUncheckedCreateNestedManyWithoutDepartmentInput, {nullable:true})
    @Type(() => SubsidyRequestUncheckedCreateNestedManyWithoutDepartmentInput)
    subsidy_requests?: SubsidyRequestUncheckedCreateNestedManyWithoutDepartmentInput;
}
