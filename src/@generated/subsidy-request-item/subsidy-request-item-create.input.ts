import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateNestedOneWithoutItemsInput } from '../subsidy-request/subsidy-request-create-nested-one-without-items.input';
import { ProjectActivityCreateNestedOneWithoutSubsidy_request_itemsInput } from '../project-activity/project-activity-create-nested-one-without-subsidy-request-items.input';
import { SubsidyReceiptCreateNestedManyWithoutSubsidy_request_itemInput } from '../subsidy-receipt/subsidy-receipt-create-nested-many-without-subsidy-request-item.input';

@InputType()
export class SubsidyRequestItemCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    requested_amount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    approved_amount?: Decimal;

    @Field(() => String, {nullable:true})
    notes?: string;

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

    @Field(() => SubsidyRequestCreateNestedOneWithoutItemsInput, {nullable:false})
    @Type(() => SubsidyRequestCreateNestedOneWithoutItemsInput)
    subsidy_request!: SubsidyRequestCreateNestedOneWithoutItemsInput;

    @Field(() => ProjectActivityCreateNestedOneWithoutSubsidy_request_itemsInput, {nullable:false})
    @Type(() => ProjectActivityCreateNestedOneWithoutSubsidy_request_itemsInput)
    project_activity!: ProjectActivityCreateNestedOneWithoutSubsidy_request_itemsInput;

    @Field(() => SubsidyReceiptCreateNestedManyWithoutSubsidy_request_itemInput, {nullable:true})
    @Type(() => SubsidyReceiptCreateNestedManyWithoutSubsidy_request_itemInput)
    subsidy_receipts?: SubsidyReceiptCreateNestedManyWithoutSubsidy_request_itemInput;
}
