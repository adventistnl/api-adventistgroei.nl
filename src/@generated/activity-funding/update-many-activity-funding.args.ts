import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityFundingUpdateManyMutationInput } from './activity-funding-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ActivityFundingWhereInput } from './activity-funding-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyActivityFundingArgs {

    @Field(() => ActivityFundingUpdateManyMutationInput, {nullable:false})
    @Type(() => ActivityFundingUpdateManyMutationInput)
    data!: ActivityFundingUpdateManyMutationInput;

    @Field(() => ActivityFundingWhereInput, {nullable:true})
    @Type(() => ActivityFundingWhereInput)
    where?: ActivityFundingWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
