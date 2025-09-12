import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { SubsidyRequest } from '../subsidy-request/subsidy-request.model';
import { SubsidyReceipt } from '../subsidy-receipt/subsidy-receipt.model';
import { ProjectActivityCount } from './project-activity-count.output';

@ObjectType()
export class ProjectActivity {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    subsidy_request_id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    budget_amount!: Decimal;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at!: Date | null;

    @Field(() => String, {nullable:true})
    deleted_by!: string | null;

    @Field(() => SubsidyRequest, {nullable:false})
    subsidy_request?: SubsidyRequest;

    @Field(() => [SubsidyReceipt], {nullable:true})
    subsidy_receipts?: Array<SubsidyReceipt>;

    @Field(() => ProjectActivityCount, {nullable:false})
    _count?: ProjectActivityCount;
}
