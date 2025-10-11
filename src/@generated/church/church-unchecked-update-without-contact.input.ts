import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DepartmentUncheckedUpdateManyWithoutChurchNestedInput } from '../department/department-unchecked-update-many-without-church-nested.input';
import { Type } from 'class-transformer';
import { UserUncheckedUpdateManyWithoutChurchNestedInput } from '../user/user-unchecked-update-many-without-church-nested.input';
import { SubsidyRequestUncheckedUpdateManyWithoutChurchNestedInput } from '../subsidy-request/subsidy-request-unchecked-update-many-without-church-nested.input';
import { AnnualBudgetUncheckedUpdateManyWithoutChurchNestedInput } from '../annual-budget/annual-budget-unchecked-update-many-without-church-nested.input';

@InputType()
export class ChurchUncheckedUpdateWithoutContactInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    institution_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    region_id?: StringFieldUpdateOperationsInput;

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

    @Field(() => DepartmentUncheckedUpdateManyWithoutChurchNestedInput, {nullable:true})
    @Type(() => DepartmentUncheckedUpdateManyWithoutChurchNestedInput)
    departments?: DepartmentUncheckedUpdateManyWithoutChurchNestedInput;

    @Field(() => UserUncheckedUpdateManyWithoutChurchNestedInput, {nullable:true})
    @Type(() => UserUncheckedUpdateManyWithoutChurchNestedInput)
    users?: UserUncheckedUpdateManyWithoutChurchNestedInput;

    @Field(() => SubsidyRequestUncheckedUpdateManyWithoutChurchNestedInput, {nullable:true})
    @Type(() => SubsidyRequestUncheckedUpdateManyWithoutChurchNestedInput)
    subsidy_requests?: SubsidyRequestUncheckedUpdateManyWithoutChurchNestedInput;

    @Field(() => AnnualBudgetUncheckedUpdateManyWithoutChurchNestedInput, {nullable:true})
    @Type(() => AnnualBudgetUncheckedUpdateManyWithoutChurchNestedInput)
    annual_budgets?: AnnualBudgetUncheckedUpdateManyWithoutChurchNestedInput;
}
