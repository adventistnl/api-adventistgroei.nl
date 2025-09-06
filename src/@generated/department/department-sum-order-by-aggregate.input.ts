import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DepartmentSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    annual_budget?: `${SortOrder}`;
}
