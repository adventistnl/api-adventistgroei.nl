import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DirectMessageCountAggregate } from './direct-message-count-aggregate.output';
import { DirectMessageMinAggregate } from './direct-message-min-aggregate.output';
import { DirectMessageMaxAggregate } from './direct-message-max-aggregate.output';

@ObjectType()
export class DirectMessageGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    sender_id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Date, {nullable:false})
    sent_at!: Date | string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => DirectMessageCountAggregate, {nullable:true})
    _count?: DirectMessageCountAggregate;

    @Field(() => DirectMessageMinAggregate, {nullable:true})
    _min?: DirectMessageMinAggregate;

    @Field(() => DirectMessageMaxAggregate, {nullable:true})
    _max?: DirectMessageMaxAggregate;
}
