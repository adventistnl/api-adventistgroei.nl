import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { Type } from 'class-transformer';
import { DepartmentOrderByWithAggregationInput } from './department-order-by-with-aggregation.input';
import { DepartmentScalarFieldEnum } from './department-scalar-field.enum';
import { DepartmentScalarWhereWithAggregatesInput } from './department-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DepartmentCountAggregateInput } from './department-count-aggregate.input';
import { DepartmentAvgAggregateInput } from './department-avg-aggregate.input';
import { DepartmentSumAggregateInput } from './department-sum-aggregate.input';
import { DepartmentMinAggregateInput } from './department-min-aggregate.input';
import { DepartmentMaxAggregateInput } from './department-max-aggregate.input';

@ArgsType()
export class DepartmentGroupByArgs {

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;

    @Field(() => [DepartmentOrderByWithAggregationInput], {nullable:true})
    @Type(() => DepartmentOrderByWithAggregationInput)
    orderBy?: Array<DepartmentOrderByWithAggregationInput>;

    @Field(() => [DepartmentScalarFieldEnum], {nullable:false})
    by!: Array<`${DepartmentScalarFieldEnum}`>;

    @Field(() => DepartmentScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => DepartmentScalarWhereWithAggregatesInput)
    having?: DepartmentScalarWhereWithAggregatesInput;

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
