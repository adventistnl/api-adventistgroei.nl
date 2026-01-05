import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyHistoryType } from '../prisma/subsidy-history-type.enum';
import { SubsidyStatusCreateNestedOneWithoutHistory_as_currentInput } from '../subsidy-status/subsidy-status-create-nested-one-without-history-as-current.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateNestedOneWithoutHistory_as_previousInput } from '../subsidy-status/subsidy-status-create-nested-one-without-history-as-previous.input';
import { UserCreateNestedOneWithoutSubsidy_status_historyInput } from '../user/user-create-nested-one-without-subsidy-status-history.input';

@InputType()
export class SubsidyStatusHistoryCreateWithoutSubsidy_requestInput {

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

    @Field(() => SubsidyStatusCreateNestedOneWithoutHistory_as_currentInput, {nullable:false})
    @Type(() => SubsidyStatusCreateNestedOneWithoutHistory_as_currentInput)
    status!: SubsidyStatusCreateNestedOneWithoutHistory_as_currentInput;

    @Field(() => SubsidyStatusCreateNestedOneWithoutHistory_as_previousInput, {nullable:true})
    @Type(() => SubsidyStatusCreateNestedOneWithoutHistory_as_previousInput)
    previous_status?: SubsidyStatusCreateNestedOneWithoutHistory_as_previousInput;

    @Field(() => UserCreateNestedOneWithoutSubsidy_status_historyInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutSubsidy_status_historyInput)
    user!: UserCreateNestedOneWithoutSubsidy_status_historyInput;
}
