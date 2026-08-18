import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchType } from '../prisma/church-type.enum';
import { Int } from '@nestjs/graphql';
import { DepartmentUncheckedCreateNestedManyWithoutChurchInput } from '../department/department-unchecked-create-nested-many-without-church.input';
import { Type } from 'class-transformer';
import { UserUncheckedCreateNestedManyWithoutChurchInput } from '../user/user-unchecked-create-nested-many-without-church.input';
import { SubsidyRequestUncheckedCreateNestedManyWithoutChurchInput } from '../subsidy-request/subsidy-request-unchecked-create-nested-many-without-church.input';
import { AnnualBudgetUncheckedCreateNestedManyWithoutChurchInput } from '../annual-budget/annual-budget-unchecked-create-nested-many-without-church.input';
import { ProjectUncheckedCreateNestedManyWithoutChurchInput } from '../project/project-unchecked-create-nested-many-without-church.input';
import { ChurchServiceCalendarUncheckedCreateNestedManyWithoutChurchInput } from '../church-service-calendar/church-service-calendar-unchecked-create-nested-many-without-church.input';

@InputType()
export class ChurchUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ChurchType, {nullable:true})
    type?: `${ChurchType}`;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    region_id?: string;

    @Field(() => String, {nullable:true})
    contact_id?: string;

    @Field(() => String, {nullable:true})
    leader_id?: string;

    @Field(() => String, {nullable:true})
    zip_code?: string;

    @Field(() => Int, {nullable:true})
    house_number?: number;

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

    @Field(() => DepartmentUncheckedCreateNestedManyWithoutChurchInput, {nullable:true})
    @Type(() => DepartmentUncheckedCreateNestedManyWithoutChurchInput)
    departments?: DepartmentUncheckedCreateNestedManyWithoutChurchInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutChurchInput, {nullable:true})
    @Type(() => UserUncheckedCreateNestedManyWithoutChurchInput)
    users?: UserUncheckedCreateNestedManyWithoutChurchInput;

    @Field(() => SubsidyRequestUncheckedCreateNestedManyWithoutChurchInput, {nullable:true})
    @Type(() => SubsidyRequestUncheckedCreateNestedManyWithoutChurchInput)
    subsidy_requests?: SubsidyRequestUncheckedCreateNestedManyWithoutChurchInput;

    @Field(() => AnnualBudgetUncheckedCreateNestedManyWithoutChurchInput, {nullable:true})
    @Type(() => AnnualBudgetUncheckedCreateNestedManyWithoutChurchInput)
    annual_budgets?: AnnualBudgetUncheckedCreateNestedManyWithoutChurchInput;

    @Field(() => ProjectUncheckedCreateNestedManyWithoutChurchInput, {nullable:true})
    @Type(() => ProjectUncheckedCreateNestedManyWithoutChurchInput)
    projects?: ProjectUncheckedCreateNestedManyWithoutChurchInput;

    @Field(() => ChurchServiceCalendarUncheckedCreateNestedManyWithoutChurchInput, {nullable:true})
    service_calendar?: ChurchServiceCalendarUncheckedCreateNestedManyWithoutChurchInput;
}
