import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ActivityFundingWhereUniqueInput } from './activity-funding-where-unique.input';
import { Type } from 'class-transformer';
import { ActivityFundingCreateWithoutProject_activityInput } from './activity-funding-create-without-project-activity.input';

@InputType()
export class ActivityFundingCreateOrConnectWithoutProject_activityInput {

    @Field(() => ActivityFundingWhereUniqueInput, {nullable:false})
    @Type(() => ActivityFundingWhereUniqueInput)
    where!: Prisma.AtLeast<ActivityFundingWhereUniqueInput, 'id' | 'project_activity_id'>;

    @Field(() => ActivityFundingCreateWithoutProject_activityInput, {nullable:false})
    @Type(() => ActivityFundingCreateWithoutProject_activityInput)
    create!: ActivityFundingCreateWithoutProject_activityInput;
}
