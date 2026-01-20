import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SubsidyRequestUncheckedCreateNestedManyWithoutSubsidy_statusInput } from '../subsidy-request/subsidy-request-unchecked-create-nested-many-without-subsidy-status.input';
import { Type } from 'class-transformer';
import { SpecialProjectsUncheckedCreateNestedManyWithoutSubsidy_statusInput } from '../special-projects/special-projects-unchecked-create-nested-many-without-subsidy-status.input';
import { SubsidyStatusHistoryUncheckedCreateNestedManyWithoutStatusInput } from '../subsidy-status-history/subsidy-status-history-unchecked-create-nested-many-without-status.input';

@InputType()
export class SubsidyStatusUncheckedCreateWithoutHistory_as_previousInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    department_id!: string;

    @Field(() => String, {nullable:false})
    assigned_to!: string;

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

    @Field(() => SubsidyRequestUncheckedCreateNestedManyWithoutSubsidy_statusInput, {nullable:true})
    @Type(() => SubsidyRequestUncheckedCreateNestedManyWithoutSubsidy_statusInput)
    subsidy_requests?: SubsidyRequestUncheckedCreateNestedManyWithoutSubsidy_statusInput;

    @Field(() => SpecialProjectsUncheckedCreateNestedManyWithoutSubsidy_statusInput, {nullable:true})
    @Type(() => SpecialProjectsUncheckedCreateNestedManyWithoutSubsidy_statusInput)
    special_projects?: SpecialProjectsUncheckedCreateNestedManyWithoutSubsidy_statusInput;

    @Field(() => SubsidyStatusHistoryUncheckedCreateNestedManyWithoutStatusInput, {nullable:true})
    @Type(() => SubsidyStatusHistoryUncheckedCreateNestedManyWithoutStatusInput)
    history_as_current?: SubsidyStatusHistoryUncheckedCreateNestedManyWithoutStatusInput;
}
