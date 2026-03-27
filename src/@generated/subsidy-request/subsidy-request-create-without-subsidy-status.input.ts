import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { SubsidyRequestPriority } from '../prisma/subsidy-request-priority.enum';
import { SubsidyRequestType } from '../prisma/subsidy-request-type.enum';
import { InstitutionCreateNestedOneWithoutSubsidy_requestsInput } from '../institution/institution-create-nested-one-without-subsidy-requests.input';
import { UserCreateNestedOneWithoutSubsidyRequestInput } from '../user/user-create-nested-one-without-subsidy-request.input';
import { DepartmentCreateNestedOneWithoutSubsidy_requestsInput } from '../department/department-create-nested-one-without-subsidy-requests.input';
import { ChurchCreateNestedOneWithoutSubsidy_requestsInput } from '../church/church-create-nested-one-without-subsidy-requests.input';
import { SubsidyRequestItemCreateNestedManyWithoutSubsidy_requestInput } from '../subsidy-request-item/subsidy-request-item-create-nested-many-without-subsidy-request.input';
import { ProjectCreateNestedOneWithoutSubsidiesInput } from '../project/project-create-nested-one-without-subsidies.input';
import { SubsidyReceiptCreateNestedManyWithoutSubsidy_requestInput } from '../subsidy-receipt/subsidy-receipt-create-nested-many-without-subsidy-request.input';
import { SubsidyStatusHistoryCreateNestedManyWithoutSubsidy_requestInput } from '../subsidy-status-history/subsidy-status-history-create-nested-many-without-subsidy-request.input';

@InputType()
export class SubsidyRequestCreateWithoutSubsidy_statusInput {

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

    @Field(() => SubsidyRequestPriority, {nullable:true})
    priority?: `${SubsidyRequestPriority}`;

    @Field(() => Boolean, {nullable:true})
    is_for_advance?: boolean;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    advance_amount?: Decimal;

    @Field(() => SubsidyRequestType, {nullable:true})
    request_type?: `${SubsidyRequestType}`;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    refund_amount?: Decimal;

    @Field(() => Boolean, {nullable:true})
    have_refund?: boolean;

    @Field(() => Boolean, {nullable:true})
    refund_done?: boolean;

    @Field(() => InstitutionCreateNestedOneWithoutSubsidy_requestsInput, {nullable:false})
    @Type(() => InstitutionCreateNestedOneWithoutSubsidy_requestsInput)
    institution!: InstitutionCreateNestedOneWithoutSubsidy_requestsInput;

    @Field(() => UserCreateNestedOneWithoutSubsidyRequestInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutSubsidyRequestInput)
    requester!: UserCreateNestedOneWithoutSubsidyRequestInput;

    @Field(() => DepartmentCreateNestedOneWithoutSubsidy_requestsInput, {nullable:false})
    @Type(() => DepartmentCreateNestedOneWithoutSubsidy_requestsInput)
    department!: DepartmentCreateNestedOneWithoutSubsidy_requestsInput;

    @Field(() => ChurchCreateNestedOneWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => ChurchCreateNestedOneWithoutSubsidy_requestsInput)
    church?: ChurchCreateNestedOneWithoutSubsidy_requestsInput;

    @Field(() => SubsidyRequestItemCreateNestedManyWithoutSubsidy_requestInput, {nullable:true})
    @Type(() => SubsidyRequestItemCreateNestedManyWithoutSubsidy_requestInput)
    items?: SubsidyRequestItemCreateNestedManyWithoutSubsidy_requestInput;

    @Field(() => ProjectCreateNestedOneWithoutSubsidiesInput, {nullable:false})
    @Type(() => ProjectCreateNestedOneWithoutSubsidiesInput)
    project!: ProjectCreateNestedOneWithoutSubsidiesInput;

    @Field(() => SubsidyReceiptCreateNestedManyWithoutSubsidy_requestInput, {nullable:true})
    @Type(() => SubsidyReceiptCreateNestedManyWithoutSubsidy_requestInput)
    subsidy_receipts?: SubsidyReceiptCreateNestedManyWithoutSubsidy_requestInput;

    @Field(() => SubsidyStatusHistoryCreateNestedManyWithoutSubsidy_requestInput, {nullable:true})
    @Type(() => SubsidyStatusHistoryCreateNestedManyWithoutSubsidy_requestInput)
    status_history?: SubsidyStatusHistoryCreateNestedManyWithoutSubsidy_requestInput;
}
