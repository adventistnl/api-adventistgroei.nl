import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityFundingUpdateInput } from './activity-funding-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ActivityFundingWhereUniqueInput } from './activity-funding-where-unique.input';

@ArgsType()
export class UpdateOneActivityFundingArgs {

    @Field(() => ActivityFundingUpdateInput, {nullable:false})
    @Type(() => ActivityFundingUpdateInput)
    data!: ActivityFundingUpdateInput;

    @Field(() => ActivityFundingWhereUniqueInput, {nullable:false})
    @Type(() => ActivityFundingWhereUniqueInput)
    where!: Prisma.AtLeast<ActivityFundingWhereUniqueInput, 'id' | 'activity_id'>;
}
