import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SettingCountAggregate } from './setting-count-aggregate.output';
import { SettingMinAggregate } from './setting-min-aggregate.output';
import { SettingMaxAggregate } from './setting-max-aggregate.output';

@ObjectType()
export class SettingGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => String, {nullable:false})
    description!: string;

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

    @Field(() => SettingCountAggregate, {nullable:true})
    _count?: SettingCountAggregate;

    @Field(() => SettingMinAggregate, {nullable:true})
    _min?: SettingMinAggregate;

    @Field(() => SettingMaxAggregate, {nullable:true})
    _max?: SettingMaxAggregate;
}
