import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyHistoryType } from '../prisma/subsidy-history-type.enum';

@InputType()
export class SubsidyStatusHistoryCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    subsidy_request_id!: string;

    @Field(() => String, {nullable:false})
    status_id!: string;

    @Field(() => String, {nullable:true})
    previous_status_id?: string;

    @Field(() => SubsidyHistoryType, {nullable:true})
    type?: `${SubsidyHistoryType}`;

    @Field(() => String, {nullable:true})
    reason?: string;

    @Field(() => String, {nullable:false})
    changed_by!: string;

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
