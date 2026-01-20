import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundingPoliciesWhereInput } from './funding-policies-where.input';
import { Type } from 'class-transformer';
import { FundingPoliciesOrderByWithRelationInput } from './funding-policies-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FundingPoliciesWhereUniqueInput } from './funding-policies-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FundingPoliciesScalarFieldEnum } from './funding-policies-scalar-field.enum';

@ArgsType()
export class FindFirstFundingPoliciesOrThrowArgs {

    @Field(() => FundingPoliciesWhereInput, {nullable:true})
    @Type(() => FundingPoliciesWhereInput)
    where?: FundingPoliciesWhereInput;

    @Field(() => [FundingPoliciesOrderByWithRelationInput], {nullable:true})
    @Type(() => FundingPoliciesOrderByWithRelationInput)
    orderBy?: Array<FundingPoliciesOrderByWithRelationInput>;

    @Field(() => FundingPoliciesWhereUniqueInput, {nullable:true})
    @Type(() => FundingPoliciesWhereUniqueInput)
    cursor?: Prisma.AtLeast<FundingPoliciesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FundingPoliciesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${FundingPoliciesScalarFieldEnum}`>;
}
