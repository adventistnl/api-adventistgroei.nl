import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ActivityFundingWhereUniqueInput } from './activity-funding-where-unique.input';
import { Type } from 'class-transformer';
import { ActivityFundingCreateInput } from './activity-funding-create.input';
import { ActivityFundingUpdateInput } from './activity-funding-update.input';

@ArgsType()
export class UpsertOneActivityFundingArgs {

    @Field(() => ActivityFundingWhereUniqueInput, {nullable:false})
    @Type(() => ActivityFundingWhereUniqueInput)
    where!: Prisma.AtLeast<ActivityFundingWhereUniqueInput, 'id'>;

    @Field(() => ActivityFundingCreateInput, {nullable:false})
    @Type(() => ActivityFundingCreateInput)
    create!: ActivityFundingCreateInput;

    @Field(() => ActivityFundingUpdateInput, {nullable:false})
    @Type(() => ActivityFundingUpdateInput)
    update!: ActivityFundingUpdateInput;
}
