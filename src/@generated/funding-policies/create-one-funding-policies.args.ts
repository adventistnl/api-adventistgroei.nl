import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundingPoliciesCreateInput } from './funding-policies-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFundingPoliciesArgs {

    @Field(() => FundingPoliciesCreateInput, {nullable:false})
    @Type(() => FundingPoliciesCreateInput)
    data!: FundingPoliciesCreateInput;
}
