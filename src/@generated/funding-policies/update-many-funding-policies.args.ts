import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundingPoliciesUpdateManyMutationInput } from './funding-policies-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FundingPoliciesWhereInput } from './funding-policies-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyFundingPoliciesArgs {

    @Field(() => FundingPoliciesUpdateManyMutationInput, {nullable:false})
    @Type(() => FundingPoliciesUpdateManyMutationInput)
    data!: FundingPoliciesUpdateManyMutationInput;

    @Field(() => FundingPoliciesWhereInput, {nullable:true})
    @Type(() => FundingPoliciesWhereInput)
    where?: FundingPoliciesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
