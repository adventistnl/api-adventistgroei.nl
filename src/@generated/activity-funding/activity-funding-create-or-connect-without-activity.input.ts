import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ActivityFundingWhereUniqueInput } from './activity-funding-where-unique.input';
import { Type } from 'class-transformer';
import { ActivityFundingCreateWithoutActivityInput } from './activity-funding-create-without-activity.input';

@InputType()
export class ActivityFundingCreateOrConnectWithoutActivityInput {

    @Field(() => ActivityFundingWhereUniqueInput, {nullable:false})
    @Type(() => ActivityFundingWhereUniqueInput)
    where!: Prisma.AtLeast<ActivityFundingWhereUniqueInput, 'id' | 'activity_id'>;

    @Field(() => ActivityFundingCreateWithoutActivityInput, {nullable:false})
    @Type(() => ActivityFundingCreateWithoutActivityInput)
    create!: ActivityFundingCreateWithoutActivityInput;
}
