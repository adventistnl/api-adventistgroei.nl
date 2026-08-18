import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PreacherRegionAccessWhereInput } from './preacher-region-access-where.input';
import { Type } from 'class-transformer';
import { PreacherRegionAccessOrderByWithRelationInput } from './preacher-region-access-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PreacherRegionAccessWhereUniqueInput } from './preacher-region-access-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PreacherRegionAccessCountAggregateInput } from './preacher-region-access-count-aggregate.input';
import { PreacherRegionAccessMinAggregateInput } from './preacher-region-access-min-aggregate.input';
import { PreacherRegionAccessMaxAggregateInput } from './preacher-region-access-max-aggregate.input';

@ArgsType()
export class PreacherRegionAccessAggregateArgs {

    @Field(() => PreacherRegionAccessWhereInput, {nullable:true})
    @Type(() => PreacherRegionAccessWhereInput)
    where?: PreacherRegionAccessWhereInput;

    @Field(() => [PreacherRegionAccessOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PreacherRegionAccessOrderByWithRelationInput>;

    @Field(() => PreacherRegionAccessWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PreacherRegionAccessWhereUniqueInput, 'id' | 'user_id_region_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PreacherRegionAccessCountAggregateInput, {nullable:true})
    _count?: PreacherRegionAccessCountAggregateInput;

    @Field(() => PreacherRegionAccessMinAggregateInput, {nullable:true})
    _min?: PreacherRegionAccessMinAggregateInput;

    @Field(() => PreacherRegionAccessMaxAggregateInput, {nullable:true})
    _max?: PreacherRegionAccessMaxAggregateInput;
}
