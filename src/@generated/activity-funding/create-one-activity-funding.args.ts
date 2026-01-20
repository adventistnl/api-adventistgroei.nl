import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityFundingCreateInput } from './activity-funding-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneActivityFundingArgs {

    @Field(() => ActivityFundingCreateInput, {nullable:false})
    @Type(() => ActivityFundingCreateInput)
    data!: ActivityFundingCreateInput;
}
