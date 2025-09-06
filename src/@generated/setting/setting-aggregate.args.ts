import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettingWhereInput } from './setting-where.input';
import { Type } from 'class-transformer';
import { SettingOrderByWithRelationInput } from './setting-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SettingWhereUniqueInput } from './setting-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SettingCountAggregateInput } from './setting-count-aggregate.input';
import { SettingMinAggregateInput } from './setting-min-aggregate.input';
import { SettingMaxAggregateInput } from './setting-max-aggregate.input';

@ArgsType()
export class SettingAggregateArgs {

    @Field(() => SettingWhereInput, {nullable:true})
    @Type(() => SettingWhereInput)
    where?: SettingWhereInput;

    @Field(() => [SettingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SettingOrderByWithRelationInput>;

    @Field(() => SettingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SettingWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SettingCountAggregateInput, {nullable:true})
    _count?: SettingCountAggregateInput;

    @Field(() => SettingMinAggregateInput, {nullable:true})
    _min?: SettingMinAggregateInput;

    @Field(() => SettingMaxAggregateInput, {nullable:true})
    _max?: SettingMaxAggregateInput;
}
