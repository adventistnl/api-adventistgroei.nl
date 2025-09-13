import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { InstitutionUpdateOneRequiredWithoutSubsidy_requestsNestedInput } from '../institution/institution-update-one-required-without-subsidy-requests-nested.input';
import { DepartmentUpdateOneRequiredWithoutSubsidy_requestsNestedInput } from '../department/department-update-one-required-without-subsidy-requests-nested.input';
import { ChurchUpdateOneRequiredWithoutSubsidy_requestsNestedInput } from '../church/church-update-one-required-without-subsidy-requests-nested.input';
import { SubsidyStatusUpdateOneRequiredWithoutSubsidy_requestsNestedInput } from '../subsidy-status/subsidy-status-update-one-required-without-subsidy-requests-nested.input';
import { ProjectActivityUpdateManyWithoutSubsidy_requestNestedInput } from '../project-activity/project-activity-update-many-without-subsidy-request-nested.input';
import { ProjectUpdateOneRequiredWithoutSubsidiesNestedInput } from '../project/project-update-one-required-without-subsidies-nested.input';

@InputType()
export class SubsidyRequestUpdateWithoutRequesterInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    total_budget?: DecimalFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

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

    @Field(() => InstitutionUpdateOneRequiredWithoutSubsidy_requestsNestedInput, {nullable:true})
    @Type(() => InstitutionUpdateOneRequiredWithoutSubsidy_requestsNestedInput)
    institution?: InstitutionUpdateOneRequiredWithoutSubsidy_requestsNestedInput;

    @Field(() => DepartmentUpdateOneRequiredWithoutSubsidy_requestsNestedInput, {nullable:true})
    @Type(() => DepartmentUpdateOneRequiredWithoutSubsidy_requestsNestedInput)
    department?: DepartmentUpdateOneRequiredWithoutSubsidy_requestsNestedInput;

    @Field(() => ChurchUpdateOneRequiredWithoutSubsidy_requestsNestedInput, {nullable:true})
    @Type(() => ChurchUpdateOneRequiredWithoutSubsidy_requestsNestedInput)
    church?: ChurchUpdateOneRequiredWithoutSubsidy_requestsNestedInput;

    @Field(() => SubsidyStatusUpdateOneRequiredWithoutSubsidy_requestsNestedInput, {nullable:true})
    @Type(() => SubsidyStatusUpdateOneRequiredWithoutSubsidy_requestsNestedInput)
    subsidy_status?: SubsidyStatusUpdateOneRequiredWithoutSubsidy_requestsNestedInput;

    @Field(() => ProjectActivityUpdateManyWithoutSubsidy_requestNestedInput, {nullable:true})
    @Type(() => ProjectActivityUpdateManyWithoutSubsidy_requestNestedInput)
    project_activities?: ProjectActivityUpdateManyWithoutSubsidy_requestNestedInput;

    @Field(() => ProjectUpdateOneRequiredWithoutSubsidiesNestedInput, {nullable:true})
    @Type(() => ProjectUpdateOneRequiredWithoutSubsidiesNestedInput)
    project?: ProjectUpdateOneRequiredWithoutSubsidiesNestedInput;
}
