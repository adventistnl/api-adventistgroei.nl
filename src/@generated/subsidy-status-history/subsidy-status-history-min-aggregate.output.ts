import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SubsidyStatusHistoryMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    subsidy_request_id?: string;

    @Field(() => String, {nullable:true})
    status_id?: string;

    @Field(() => String, {nullable:true})
    previous_status_id?: string;

    @Field(() => String, {nullable:true})
    reason?: string;

    @Field(() => String, {nullable:true})
    changed_by?: string;

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
}
