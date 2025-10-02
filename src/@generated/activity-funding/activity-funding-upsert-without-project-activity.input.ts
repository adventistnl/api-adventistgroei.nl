import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityFundingUpdateWithoutProject_activityInput } from './activity-funding-update-without-project-activity.input';
import { Type } from 'class-transformer';
import { ActivityFundingCreateWithoutProject_activityInput } from './activity-funding-create-without-project-activity.input';
import { ActivityFundingWhereInput } from './activity-funding-where.input';

@InputType()
export class ActivityFundingUpsertWithoutProject_activityInput {

    @Field(() => ActivityFundingUpdateWithoutProject_activityInput, {nullable:false})
    @Type(() => ActivityFundingUpdateWithoutProject_activityInput)
    update!: ActivityFundingUpdateWithoutProject_activityInput;

    @Field(() => ActivityFundingCreateWithoutProject_activityInput, {nullable:false})
    @Type(() => ActivityFundingCreateWithoutProject_activityInput)
    create!: ActivityFundingCreateWithoutProject_activityInput;

    @Field(() => ActivityFundingWhereInput, {nullable:true})
    @Type(() => ActivityFundingWhereInput)
    where?: ActivityFundingWhereInput;
}
