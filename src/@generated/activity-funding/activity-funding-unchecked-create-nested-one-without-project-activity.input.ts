import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityFundingCreateWithoutProject_activityInput } from './activity-funding-create-without-project-activity.input';
import { Type } from 'class-transformer';
import { ActivityFundingCreateOrConnectWithoutProject_activityInput } from './activity-funding-create-or-connect-without-project-activity.input';
import { Prisma } from '@prisma/client';
import { ActivityFundingWhereUniqueInput } from './activity-funding-where-unique.input';

@InputType()
export class ActivityFundingUncheckedCreateNestedOneWithoutProject_activityInput {

    @Field(() => ActivityFundingCreateWithoutProject_activityInput, {nullable:true})
    @Type(() => ActivityFundingCreateWithoutProject_activityInput)
    create?: ActivityFundingCreateWithoutProject_activityInput;

    @Field(() => ActivityFundingCreateOrConnectWithoutProject_activityInput, {nullable:true})
    @Type(() => ActivityFundingCreateOrConnectWithoutProject_activityInput)
    connectOrCreate?: ActivityFundingCreateOrConnectWithoutProject_activityInput;

    @Field(() => ActivityFundingWhereUniqueInput, {nullable:true})
    @Type(() => ActivityFundingWhereUniqueInput)
    connect?: Prisma.AtLeast<ActivityFundingWhereUniqueInput, 'id' | 'project_activity_id'>;
}
