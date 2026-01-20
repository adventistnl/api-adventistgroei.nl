import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityFundingWhereInput } from './activity-funding-where.input';
import { Type } from 'class-transformer';
import { ActivityFundingUpdateWithoutActivityInput } from './activity-funding-update-without-activity.input';

@InputType()
export class ActivityFundingUpdateToOneWithWhereWithoutActivityInput {

    @Field(() => ActivityFundingWhereInput, {nullable:true})
    @Type(() => ActivityFundingWhereInput)
    where?: ActivityFundingWhereInput;

    @Field(() => ActivityFundingUpdateWithoutActivityInput, {nullable:false})
    @Type(() => ActivityFundingUpdateWithoutActivityInput)
    data!: ActivityFundingUpdateWithoutActivityInput;
}
