import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyHistoryType } from '../prisma/subsidy-history-type.enum';
import { SubsidyRequestCreateNestedOneWithoutStatus_historyInput } from '../subsidy-request/subsidy-request-create-nested-one-without-status-history.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateNestedOneWithoutHistory_as_currentInput } from '../subsidy-status/subsidy-status-create-nested-one-without-history-as-current.input';
import { SubsidyStatusCreateNestedOneWithoutHistory_as_previousInput } from '../subsidy-status/subsidy-status-create-nested-one-without-history-as-previous.input';

@InputType()
export class SubsidyStatusHistoryCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => SubsidyHistoryType, {nullable:true})
    type?: `${SubsidyHistoryType}`;

    @Field(() => String, {nullable:true})
    reason?: string;

    @Field(() => Date, {nullable:true})
    changed_at?: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => SubsidyRequestCreateNestedOneWithoutStatus_historyInput, {nullable:false})
    @Type(() => SubsidyRequestCreateNestedOneWithoutStatus_historyInput)
    subsidy_request!: SubsidyRequestCreateNestedOneWithoutStatus_historyInput;

    @Field(() => SubsidyStatusCreateNestedOneWithoutHistory_as_currentInput, {nullable:false})
    @Type(() => SubsidyStatusCreateNestedOneWithoutHistory_as_currentInput)
    status!: SubsidyStatusCreateNestedOneWithoutHistory_as_currentInput;

    @Field(() => SubsidyStatusCreateNestedOneWithoutHistory_as_previousInput, {nullable:true})
    @Type(() => SubsidyStatusCreateNestedOneWithoutHistory_as_previousInput)
    previous_status?: SubsidyStatusCreateNestedOneWithoutHistory_as_previousInput;
}
