import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DepartmentCreateNestedOneWithoutSubsidy_statusesInput } from '../department/department-create-nested-one-without-subsidy-statuses.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateNestedManyWithoutSubsidy_statusInput } from '../subsidy-request/subsidy-request-create-nested-many-without-subsidy-status.input';
import { SpecialProjectsCreateNestedManyWithoutSubsidy_statusInput } from '../special-projects/special-projects-create-nested-many-without-subsidy-status.input';
import { SubsidyStatusHistoryCreateNestedManyWithoutStatusInput } from '../subsidy-status-history/subsidy-status-history-create-nested-many-without-status.input';
import { SubsidyStatusHistoryCreateNestedManyWithoutPrevious_statusInput } from '../subsidy-status-history/subsidy-status-history-create-nested-many-without-previous-status.input';

@InputType()
export class SubsidyStatusCreateWithoutAssigned_userInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    order!: number;

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

    @Field(() => DepartmentCreateNestedOneWithoutSubsidy_statusesInput, {nullable:false})
    @Type(() => DepartmentCreateNestedOneWithoutSubsidy_statusesInput)
    department!: DepartmentCreateNestedOneWithoutSubsidy_statusesInput;

    @Field(() => SubsidyRequestCreateNestedManyWithoutSubsidy_statusInput, {nullable:true})
    @Type(() => SubsidyRequestCreateNestedManyWithoutSubsidy_statusInput)
    subsidy_requests?: SubsidyRequestCreateNestedManyWithoutSubsidy_statusInput;

    @Field(() => SpecialProjectsCreateNestedManyWithoutSubsidy_statusInput, {nullable:true})
    @Type(() => SpecialProjectsCreateNestedManyWithoutSubsidy_statusInput)
    special_projects?: SpecialProjectsCreateNestedManyWithoutSubsidy_statusInput;

    @Field(() => SubsidyStatusHistoryCreateNestedManyWithoutStatusInput, {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateNestedManyWithoutStatusInput)
    history_as_current?: SubsidyStatusHistoryCreateNestedManyWithoutStatusInput;

    @Field(() => SubsidyStatusHistoryCreateNestedManyWithoutPrevious_statusInput, {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateNestedManyWithoutPrevious_statusInput)
    history_as_previous?: SubsidyStatusHistoryCreateNestedManyWithoutPrevious_statusInput;
}
