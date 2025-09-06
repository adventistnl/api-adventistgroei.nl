import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { Type } from 'class-transformer';
import { DepartmentOrderByWithRelationInput } from './department-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DepartmentCountAggregateInput } from './department-count-aggregate.input';
import { DepartmentAvgAggregateInput } from './department-avg-aggregate.input';
import { DepartmentSumAggregateInput } from './department-sum-aggregate.input';
import { DepartmentMinAggregateInput } from './department-min-aggregate.input';
import { DepartmentMaxAggregateInput } from './department-max-aggregate.input';

@ArgsType()
export class DepartmentAggregateArgs {

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;

    @Field(() => [DepartmentOrderByWithRelationInput], {nullable:true})
    @Type(() => DepartmentOrderByWithRelationInput)
    orderBy?: Array<DepartmentOrderByWithRelationInput>;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    cursor?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DepartmentCountAggregateInput, {nullable:true})
    @Type(() => DepartmentCountAggregateInput)
    _count?: DepartmentCountAggregateInput;

    @Field(() => DepartmentAvgAggregateInput, {nullable:true})
    @Type(() => DepartmentAvgAggregateInput)
    _avg?: DepartmentAvgAggregateInput;

    @Field(() => DepartmentSumAggregateInput, {nullable:true})
    @Type(() => DepartmentSumAggregateInput)
    _sum?: DepartmentSumAggregateInput;

    @Field(() => DepartmentMinAggregateInput, {nullable:true})
    @Type(() => DepartmentMinAggregateInput)
    _min?: DepartmentMinAggregateInput;

    @Field(() => DepartmentMaxAggregateInput, {nullable:true})
    @Type(() => DepartmentMaxAggregateInput)
    _max?: DepartmentMaxAggregateInput;
}
