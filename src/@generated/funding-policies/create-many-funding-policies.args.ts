import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FundingPoliciesCreateManyInput } from './funding-policies-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFundingPoliciesArgs {

    @Field(() => [FundingPoliciesCreateManyInput], {nullable:false})
    @Type(() => FundingPoliciesCreateManyInput)
    data!: Array<FundingPoliciesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
