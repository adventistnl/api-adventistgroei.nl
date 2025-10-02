import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityFundingCreateWithoutProject_activityInput } from './activity-funding-create-without-project-activity.input';
import { Type } from 'class-transformer';
import { ActivityFundingCreateOrConnectWithoutProject_activityInput } from './activity-funding-create-or-connect-without-project-activity.input';
import { ActivityFundingUpsertWithoutProject_activityInput } from './activity-funding-upsert-without-project-activity.input';
import { ActivityFundingWhereInput } from './activity-funding-where.input';
import { Prisma } from '@prisma/client';
import { ActivityFundingWhereUniqueInput } from './activity-funding-where-unique.input';
import { ActivityFundingUpdateToOneWithWhereWithoutProject_activityInput } from './activity-funding-update-to-one-with-where-without-project-activity.input';

@InputType()
export class ActivityFundingUncheckedUpdateOneWithoutProject_activityNestedInput {

    @Field(() => ActivityFundingCreateWithoutProject_activityInput, {nullable:true})
    @Type(() => ActivityFundingCreateWithoutProject_activityInput)
    create?: ActivityFundingCreateWithoutProject_activityInput;

    @Field(() => ActivityFundingCreateOrConnectWithoutProject_activityInput, {nullable:true})
    @Type(() => ActivityFundingCreateOrConnectWithoutProject_activityInput)
    connectOrCreate?: ActivityFundingCreateOrConnectWithoutProject_activityInput;

    @Field(() => ActivityFundingUpsertWithoutProject_activityInput, {nullable:true})
    @Type(() => ActivityFundingUpsertWithoutProject_activityInput)
    upsert?: ActivityFundingUpsertWithoutProject_activityInput;

    @Field(() => ActivityFundingWhereInput, {nullable:true})
    @Type(() => ActivityFundingWhereInput)
    disconnect?: ActivityFundingWhereInput;

    @Field(() => ActivityFundingWhereInput, {nullable:true})
    @Type(() => ActivityFundingWhereInput)
    delete?: ActivityFundingWhereInput;

    @Field(() => ActivityFundingWhereUniqueInput, {nullable:true})
    @Type(() => ActivityFundingWhereUniqueInput)
    connect?: Prisma.AtLeast<ActivityFundingWhereUniqueInput, 'id' | 'project_activity_id'>;

    @Field(() => ActivityFundingUpdateToOneWithWhereWithoutProject_activityInput, {nullable:true})
    @Type(() => ActivityFundingUpdateToOneWithWhereWithoutProject_activityInput)
    update?: ActivityFundingUpdateToOneWithWhereWithoutProject_activityInput;
}
