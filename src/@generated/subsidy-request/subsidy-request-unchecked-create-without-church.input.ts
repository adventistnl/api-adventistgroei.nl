import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { SubsidyRequestPriority } from '../prisma/subsidy-request-priority.enum';
import { SubsidyRequestItemUncheckedCreateNestedManyWithoutSubsidy_requestInput } from '../subsidy-request-item/subsidy-request-item-unchecked-create-nested-many-without-subsidy-request.input';
import { SubsidyReceiptUncheckedCreateNestedManyWithoutSubsidy_requestInput } from '../subsidy-receipt/subsidy-receipt-unchecked-create-nested-many-without-subsidy-request.input';
import { SubsidyStatusHistoryUncheckedCreateNestedManyWithoutSubsidy_requestInput } from '../subsidy-status-history/subsidy-status-history-unchecked-create-nested-many-without-subsidy-request.input';

@InputType()
export class SubsidyRequestUncheckedCreateWithoutChurchInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    total_budget!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    approved_amount?: Decimal;

    @Field(() => String, {nullable:true})
    rejection_reason?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Date, {nullable:true})
    approved_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => String, {nullable:true})
    approved_by?: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    requester_id!: string;

    @Field(() => String, {nullable:false})
    department_id!: string;

    @Field(() => SubsidyRequestPriority, {nullable:true})
    priority?: `${SubsidyRequestPriority}`;

    @Field(() => String, {nullable:false})
    subsidy_statuses_id!: string;

    @Field(() => String, {nullable:false})
    project_id!: string;

    @Field(() => SubsidyRequestItemUncheckedCreateNestedManyWithoutSubsidy_requestInput, {nullable:true})
    @Type(() => SubsidyRequestItemUncheckedCreateNestedManyWithoutSubsidy_requestInput)
    items?: SubsidyRequestItemUncheckedCreateNestedManyWithoutSubsidy_requestInput;

    @Field(() => SubsidyReceiptUncheckedCreateNestedManyWithoutSubsidy_requestInput, {nullable:true})
    @Type(() => SubsidyReceiptUncheckedCreateNestedManyWithoutSubsidy_requestInput)
    subsidy_receipts?: SubsidyReceiptUncheckedCreateNestedManyWithoutSubsidy_requestInput;

    @Field(() => SubsidyStatusHistoryUncheckedCreateNestedManyWithoutSubsidy_requestInput, {nullable:true})
    @Type(() => SubsidyStatusHistoryUncheckedCreateNestedManyWithoutSubsidy_requestInput)
    status_history?: SubsidyStatusHistoryUncheckedCreateNestedManyWithoutSubsidy_requestInput;
}
