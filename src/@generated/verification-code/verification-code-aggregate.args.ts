import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerificationCodeWhereInput } from './verification-code-where.input';
import { Type } from 'class-transformer';
import { VerificationCodeOrderByWithRelationInput } from './verification-code-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VerificationCodeWhereUniqueInput } from './verification-code-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VerificationCodeCountAggregateInput } from './verification-code-count-aggregate.input';
import { VerificationCodeAvgAggregateInput } from './verification-code-avg-aggregate.input';
import { VerificationCodeSumAggregateInput } from './verification-code-sum-aggregate.input';
import { VerificationCodeMinAggregateInput } from './verification-code-min-aggregate.input';
import { VerificationCodeMaxAggregateInput } from './verification-code-max-aggregate.input';

@ArgsType()
export class VerificationCodeAggregateArgs {

    @Field(() => VerificationCodeWhereInput, {nullable:true})
    @Type(() => VerificationCodeWhereInput)
    where?: VerificationCodeWhereInput;

    @Field(() => [VerificationCodeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VerificationCodeOrderByWithRelationInput>;

    @Field(() => VerificationCodeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VerificationCodeWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => VerificationCodeCountAggregateInput, {nullable:true})
    _count?: VerificationCodeCountAggregateInput;

    @Field(() => VerificationCodeAvgAggregateInput, {nullable:true})
    _avg?: VerificationCodeAvgAggregateInput;

    @Field(() => VerificationCodeSumAggregateInput, {nullable:true})
    _sum?: VerificationCodeSumAggregateInput;

    @Field(() => VerificationCodeMinAggregateInput, {nullable:true})
    _min?: VerificationCodeMinAggregateInput;

    @Field(() => VerificationCodeMaxAggregateInput, {nullable:true})
    _max?: VerificationCodeMaxAggregateInput;
}
