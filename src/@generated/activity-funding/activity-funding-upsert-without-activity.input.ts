import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityFundingUpdateWithoutActivityInput } from './activity-funding-update-without-activity.input';
import { Type } from 'class-transformer';
import { ActivityFundingCreateWithoutActivityInput } from './activity-funding-create-without-activity.input';
import { ActivityFundingWhereInput } from './activity-funding-where.input';

@InputType()
export class ActivityFundingUpsertWithoutActivityInput {

    @Field(() => ActivityFundingUpdateWithoutActivityInput, {nullable:false})
    @Type(() => ActivityFundingUpdateWithoutActivityInput)
    update!: ActivityFundingUpdateWithoutActivityInput;

    @Field(() => ActivityFundingCreateWithoutActivityInput, {nullable:false})
    @Type(() => ActivityFundingCreateWithoutActivityInput)
    create!: ActivityFundingCreateWithoutActivityInput;

    @Field(() => ActivityFundingWhereInput, {nullable:true})
    @Type(() => ActivityFundingWhereInput)
    where?: ActivityFundingWhereInput;
}
