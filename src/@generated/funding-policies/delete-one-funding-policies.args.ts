import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FundingPoliciesWhereUniqueInput } from './funding-policies-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneFundingPoliciesArgs {

    @Field(() => FundingPoliciesWhereUniqueInput, {nullable:false})
    @Type(() => FundingPoliciesWhereUniqueInput)
    where!: Prisma.AtLeast<FundingPoliciesWhereUniqueInput, 'id'>;
}
