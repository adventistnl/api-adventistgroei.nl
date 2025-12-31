import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SubsidyStatusHistoryCountAggregate } from './subsidy-status-history-count-aggregate.output';
import { SubsidyStatusHistoryMinAggregate } from './subsidy-status-history-min-aggregate.output';
import { SubsidyStatusHistoryMaxAggregate } from './subsidy-status-history-max-aggregate.output';

@ObjectType()
export class SubsidyStatusHistoryGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    subsidy_request_id!: string;

    @Field(() => String, {nullable:false})
    status_id!: string;

    @Field(() => String, {nullable:true})
    previous_status_id?: string;

    @Field(() => String, {nullable:true})
    reason?: string;

    @Field(() => String, {nullable:false})
    changed_by!: string;

    @Field(() => Date, {nullable:false})
    changed_at!: Date | string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => Boolean, {nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => SubsidyStatusHistoryCountAggregate, {nullable:true})
    _count?: SubsidyStatusHistoryCountAggregate;

    @Field(() => SubsidyStatusHistoryMinAggregate, {nullable:true})
    _min?: SubsidyStatusHistoryMinAggregate;

    @Field(() => SubsidyStatusHistoryMaxAggregate, {nullable:true})
    _max?: SubsidyStatusHistoryMaxAggregate;
}
