import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumChurchTypeFieldUpdateOperationsInput } from '../prisma/enum-church-type-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { InstitutionUpdateOneRequiredWithoutChurchesNestedInput } from '../institution/institution-update-one-required-without-churches-nested.input';
import { Type } from 'class-transformer';
import { RegionUpdateOneWithoutChurchesNestedInput } from '../region/region-update-one-without-churches-nested.input';
import { ContactUpdateOneWithoutChurchNestedInput } from '../contact/contact-update-one-without-church-nested.input';
import { UserUpdateOneWithoutLed_churchNestedInput } from '../user/user-update-one-without-led-church-nested.input';
import { DepartmentUpdateManyWithoutChurchNestedInput } from '../department/department-update-many-without-church-nested.input';
import { SubsidyRequestUpdateManyWithoutChurchNestedInput } from '../subsidy-request/subsidy-request-update-many-without-church-nested.input';
import { AnnualBudgetUpdateManyWithoutChurchNestedInput } from '../annual-budget/annual-budget-update-many-without-church-nested.input';
import { ProjectUpdateManyWithoutChurchNestedInput } from '../project/project-update-many-without-church-nested.input';
import { ChurchServiceCalendarUpdateManyWithoutChurchNestedInput } from '../church-service-calendar/church-service-calendar-update-many-without-church-nested.input';
import { AssignmentUpdateManyWithoutChurchNestedInput } from '../assignment/assignment-update-many-without-church-nested.input';

@InputType()
export class ChurchUpdateWithoutUsersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumChurchTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumChurchTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    zip_code?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    house_number?: NullableIntFieldUpdateOperationsInput;

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

    @Field(() => InstitutionUpdateOneRequiredWithoutChurchesNestedInput, {nullable:true})
    @Type(() => InstitutionUpdateOneRequiredWithoutChurchesNestedInput)
    institution?: InstitutionUpdateOneRequiredWithoutChurchesNestedInput;

    @Field(() => RegionUpdateOneWithoutChurchesNestedInput, {nullable:true})
    region?: RegionUpdateOneWithoutChurchesNestedInput;

    @Field(() => ContactUpdateOneWithoutChurchNestedInput, {nullable:true})
    @Type(() => ContactUpdateOneWithoutChurchNestedInput)
    contact?: ContactUpdateOneWithoutChurchNestedInput;

    @Field(() => UserUpdateOneWithoutLed_churchNestedInput, {nullable:true})
    @Type(() => UserUpdateOneWithoutLed_churchNestedInput)
    leader?: UserUpdateOneWithoutLed_churchNestedInput;

    @Field(() => DepartmentUpdateManyWithoutChurchNestedInput, {nullable:true})
    @Type(() => DepartmentUpdateManyWithoutChurchNestedInput)
    departments?: DepartmentUpdateManyWithoutChurchNestedInput;

    @Field(() => SubsidyRequestUpdateManyWithoutChurchNestedInput, {nullable:true})
    @Type(() => SubsidyRequestUpdateManyWithoutChurchNestedInput)
    subsidy_requests?: SubsidyRequestUpdateManyWithoutChurchNestedInput;

    @Field(() => AnnualBudgetUpdateManyWithoutChurchNestedInput, {nullable:true})
    @Type(() => AnnualBudgetUpdateManyWithoutChurchNestedInput)
    annual_budgets?: AnnualBudgetUpdateManyWithoutChurchNestedInput;

    @Field(() => ProjectUpdateManyWithoutChurchNestedInput, {nullable:true})
    @Type(() => ProjectUpdateManyWithoutChurchNestedInput)
    projects?: ProjectUpdateManyWithoutChurchNestedInput;

    @Field(() => ChurchServiceCalendarUpdateManyWithoutChurchNestedInput, {nullable:true})
    service_calendar?: ChurchServiceCalendarUpdateManyWithoutChurchNestedInput;

    @Field(() => AssignmentUpdateManyWithoutChurchNestedInput, {nullable:true})
    assignments?: AssignmentUpdateManyWithoutChurchNestedInput;
}
