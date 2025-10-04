import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ActivityFundingWhereUniqueInput } from './activity-funding-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueActivityFundingOrThrowArgs {

    @Field(() => ActivityFundingWhereUniqueInput, {nullable:false})
    @Type(() => ActivityFundingWhereUniqueInput)
    where!: Prisma.AtLeast<ActivityFundingWhereUniqueInput, 'id' | 'activity_id'>;
}
