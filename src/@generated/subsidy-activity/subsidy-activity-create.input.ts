import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateNestedOneWithoutSubsidy_activitiesInput } from '../subsidy-request/subsidy-request-create-nested-one-without-subsidy-activities.input';
import { SubsidyReceiptCreateNestedManyWithoutSubsidy_activityInput } from '../subsidy-receipt/subsidy-receipt-create-nested-many-without-subsidy-activity.input';

@InputType()
export class SubsidyActivityCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    budget_amount!: Decimal;

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

    @Field(() => SubsidyRequestCreateNestedOneWithoutSubsidy_activitiesInput, {nullable:false})
    @Type(() => SubsidyRequestCreateNestedOneWithoutSubsidy_activitiesInput)
    subsidy_request!: SubsidyRequestCreateNestedOneWithoutSubsidy_activitiesInput;

    @Field(() => SubsidyReceiptCreateNestedManyWithoutSubsidy_activityInput, {nullable:true})
    @Type(() => SubsidyReceiptCreateNestedManyWithoutSubsidy_activityInput)
    subsidy_receipts?: SubsidyReceiptCreateNestedManyWithoutSubsidy_activityInput;
}
