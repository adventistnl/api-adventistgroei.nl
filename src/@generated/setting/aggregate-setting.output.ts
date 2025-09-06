import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SettingCountAggregate } from './setting-count-aggregate.output';
import { SettingMinAggregate } from './setting-min-aggregate.output';
import { SettingMaxAggregate } from './setting-max-aggregate.output';

@ObjectType()
export class AggregateSetting {

    @Field(() => SettingCountAggregate, {nullable:true})
    _count?: SettingCountAggregate;

    @Field(() => SettingMinAggregate, {nullable:true})
    _min?: SettingMinAggregate;

    @Field(() => SettingMaxAggregate, {nullable:true})
    _max?: SettingMaxAggregate;
}
