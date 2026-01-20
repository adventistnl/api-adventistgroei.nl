import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundingPoliciesUpdateInput } from './funding-policies-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FundingPoliciesWhereUniqueInput } from './funding-policies-where-unique.input';

@ArgsType()
export class UpdateOneFundingPoliciesArgs {

    @Field(() => FundingPoliciesUpdateInput, {nullable:false})
    @Type(() => FundingPoliciesUpdateInput)
    data!: FundingPoliciesUpdateInput;

    @Field(() => FundingPoliciesWhereUniqueInput, {nullable:false})
    @Type(() => FundingPoliciesWhereUniqueInput)
    where!: Prisma.AtLeast<FundingPoliciesWhereUniqueInput, 'id'>;
}
