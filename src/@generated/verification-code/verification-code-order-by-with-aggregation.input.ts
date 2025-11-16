import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VerificationCodeCountOrderByAggregateInput } from './verification-code-count-order-by-aggregate.input';
import { VerificationCodeAvgOrderByAggregateInput } from './verification-code-avg-order-by-aggregate.input';
import { VerificationCodeMaxOrderByAggregateInput } from './verification-code-max-order-by-aggregate.input';
import { VerificationCodeMinOrderByAggregateInput } from './verification-code-min-order-by-aggregate.input';
import { VerificationCodeSumOrderByAggregateInput } from './verification-code-sum-order-by-aggregate.input';

@InputType()
export class VerificationCodeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    code?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    attempts?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    used?: `${SortOrder}`;

    @Field(() => VerificationCodeCountOrderByAggregateInput, {nullable:true})
    _count?: VerificationCodeCountOrderByAggregateInput;

    @Field(() => VerificationCodeAvgOrderByAggregateInput, {nullable:true})
    _avg?: VerificationCodeAvgOrderByAggregateInput;

    @Field(() => VerificationCodeMaxOrderByAggregateInput, {nullable:true})
    _max?: VerificationCodeMaxOrderByAggregateInput;

    @Field(() => VerificationCodeMinOrderByAggregateInput, {nullable:true})
    _min?: VerificationCodeMinOrderByAggregateInput;

    @Field(() => VerificationCodeSumOrderByAggregateInput, {nullable:true})
    _sum?: VerificationCodeSumOrderByAggregateInput;
}
