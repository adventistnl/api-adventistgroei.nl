import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { ProjectActivityCreateNestedOneWithoutSubsidy_receiptsInput } from '../project-activity/project-activity-create-nested-one-without-subsidy-receipts.input';
import { SubsidyRequestCreateNestedOneWithoutSubsidy_receiptsInput } from '../subsidy-request/subsidy-request-create-nested-one-without-subsidy-receipts.input';

@InputType()
export class SubsidyReceiptCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    file_path!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    amount!: Decimal;

    @Field(() => Boolean, {nullable:false})
    approved!: boolean;

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

    @Field(() => ProjectActivityCreateNestedOneWithoutSubsidy_receiptsInput, {nullable:false})
    @Type(() => ProjectActivityCreateNestedOneWithoutSubsidy_receiptsInput)
    project_activity!: ProjectActivityCreateNestedOneWithoutSubsidy_receiptsInput;

    @Field(() => SubsidyRequestCreateNestedOneWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => SubsidyRequestCreateNestedOneWithoutSubsidy_receiptsInput)
    subsidy_request?: SubsidyRequestCreateNestedOneWithoutSubsidy_receiptsInput;
}
