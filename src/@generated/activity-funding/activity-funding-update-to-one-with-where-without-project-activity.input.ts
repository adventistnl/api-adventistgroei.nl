import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityFundingWhereInput } from './activity-funding-where.input';
import { Type } from 'class-transformer';
import { ActivityFundingUpdateWithoutProject_activityInput } from './activity-funding-update-without-project-activity.input';

@InputType()
export class ActivityFundingUpdateToOneWithWhereWithoutProject_activityInput {

    @Field(() => ActivityFundingWhereInput, {nullable:true})
    @Type(() => ActivityFundingWhereInput)
    where?: ActivityFundingWhereInput;

    @Field(() => ActivityFundingUpdateWithoutProject_activityInput, {nullable:false})
    @Type(() => ActivityFundingUpdateWithoutProject_activityInput)
    data!: ActivityFundingUpdateWithoutProject_activityInput;
}
