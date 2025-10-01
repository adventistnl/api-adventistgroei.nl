import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundingPoliciesWhereInput } from './funding-policies-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyFundingPoliciesArgs {

    @Field(() => FundingPoliciesWhereInput, {nullable:true})
    @Type(() => FundingPoliciesWhereInput)
    where?: FundingPoliciesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
