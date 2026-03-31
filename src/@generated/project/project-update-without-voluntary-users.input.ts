import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { EnumLanguagePreferenceFieldUpdateOperationsInput } from '../prisma/enum-language-preference-field-update-operations.input';
import { EnumProjectTypeFieldUpdateOperationsInput } from '../prisma/enum-project-type-field-update-operations.input';
import { EnumProjectStatusFieldUpdateOperationsInput } from '../prisma/enum-project-status-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DepartmentUpdateOneRequiredWithoutProjectsNestedInput } from '../department/department-update-one-required-without-projects-nested.input';
import { DepartmentUpdateOneWithoutChurch_projectsNestedInput } from '../department/department-update-one-without-church-projects-nested.input';
import { UserUpdateOneRequiredWithoutProjectNestedInput } from '../user/user-update-one-required-without-project-nested.input';
import { UserUpdateOneWithoutCo_owned_projectsNestedInput } from '../user/user-update-one-without-co-owned-projects-nested.input';
import { EventUpdateOneWithoutProjectsNestedInput } from '../event/event-update-one-without-projects-nested.input';
import { InstitutionUpdateOneWithoutProjectsNestedInput } from '../institution/institution-update-one-without-projects-nested.input';
import { ChurchUpdateOneWithoutProjectsNestedInput } from '../church/church-update-one-without-projects-nested.input';
import { ProjectActivityUpdateManyWithoutProjectNestedInput } from '../project-activity/project-activity-update-many-without-project-nested.input';
import { SubsidyRequestUpdateManyWithoutProjectNestedInput } from '../subsidy-request/subsidy-request-update-many-without-project-nested.input';
import { SpecialProjectsUpdateManyWithoutProjectNestedInput } from '../special-projects/special-projects-update-many-without-project-nested.input';
import { ProjectHistoryUpdateManyWithoutProjectNestedInput } from '../project-history/project-history-update-many-without-project-nested.input';
import { BudgetTransactionUpdateManyWithoutProjectNestedInput } from '../budget-transaction/budget-transaction-update-many-without-project-nested.input';

@InputType()
export class ProjectUpdateWithoutVoluntary_usersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    budget?: DecimalFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    subsidized_budget?: DecimalFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    balance?: DecimalFieldUpdateOperationsInput;

    @Field(() => EnumLanguagePreferenceFieldUpdateOperationsInput, {nullable:true})
    language_preference?: EnumLanguagePreferenceFieldUpdateOperationsInput;

    @Field(() => EnumProjectTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumProjectTypeFieldUpdateOperationsInput;

    @Field(() => EnumProjectStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumProjectStatusFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_private?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    required_volunteers?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    start_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    end_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deadline?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    created_by?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    updated_by?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_deleted?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    deleted_by?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DepartmentUpdateOneRequiredWithoutProjectsNestedInput, {nullable:true})
    @Type(() => DepartmentUpdateOneRequiredWithoutProjectsNestedInput)
    department?: DepartmentUpdateOneRequiredWithoutProjectsNestedInput;

    @Field(() => DepartmentUpdateOneWithoutChurch_projectsNestedInput, {nullable:true})
    @Type(() => DepartmentUpdateOneWithoutChurch_projectsNestedInput)
    church_department?: DepartmentUpdateOneWithoutChurch_projectsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutProjectNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutProjectNestedInput)
    owner?: UserUpdateOneRequiredWithoutProjectNestedInput;

    @Field(() => UserUpdateOneWithoutCo_owned_projectsNestedInput, {nullable:true})
    @Type(() => UserUpdateOneWithoutCo_owned_projectsNestedInput)
    co_owner?: UserUpdateOneWithoutCo_owned_projectsNestedInput;

    @Field(() => EventUpdateOneWithoutProjectsNestedInput, {nullable:true})
    @Type(() => EventUpdateOneWithoutProjectsNestedInput)
    event?: EventUpdateOneWithoutProjectsNestedInput;

    @Field(() => InstitutionUpdateOneWithoutProjectsNestedInput, {nullable:true})
    @Type(() => InstitutionUpdateOneWithoutProjectsNestedInput)
    Institution?: InstitutionUpdateOneWithoutProjectsNestedInput;

    @Field(() => ChurchUpdateOneWithoutProjectsNestedInput, {nullable:true})
    @Type(() => ChurchUpdateOneWithoutProjectsNestedInput)
    church?: ChurchUpdateOneWithoutProjectsNestedInput;

    @Field(() => ProjectActivityUpdateManyWithoutProjectNestedInput, {nullable:true})
    @Type(() => ProjectActivityUpdateManyWithoutProjectNestedInput)
    activities?: ProjectActivityUpdateManyWithoutProjectNestedInput;

    @Field(() => SubsidyRequestUpdateManyWithoutProjectNestedInput, {nullable:true})
    @Type(() => SubsidyRequestUpdateManyWithoutProjectNestedInput)
    subsidies?: SubsidyRequestUpdateManyWithoutProjectNestedInput;

    @Field(() => SpecialProjectsUpdateManyWithoutProjectNestedInput, {nullable:true})
    @Type(() => SpecialProjectsUpdateManyWithoutProjectNestedInput)
    special_projects?: SpecialProjectsUpdateManyWithoutProjectNestedInput;

    @Field(() => ProjectHistoryUpdateManyWithoutProjectNestedInput, {nullable:true})
    @Type(() => ProjectHistoryUpdateManyWithoutProjectNestedInput)
    history?: ProjectHistoryUpdateManyWithoutProjectNestedInput;

    @Field(() => BudgetTransactionUpdateManyWithoutProjectNestedInput, {nullable:true})
    @Type(() => BudgetTransactionUpdateManyWithoutProjectNestedInput)
    budget_transactions?: BudgetTransactionUpdateManyWithoutProjectNestedInput;
}
