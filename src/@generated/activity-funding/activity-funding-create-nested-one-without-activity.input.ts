import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityFundingCreateWithoutActivityInput } from './activity-funding-create-without-activity.input';
import { Type } from 'class-transformer';
import { ActivityFundingCreateOrConnectWithoutActivityInput } from './activity-funding-create-or-connect-without-activity.input';
import { Prisma } from '@prisma/client';
import { ActivityFundingWhereUniqueInput } from './activity-funding-where-unique.input';

@InputType()
export class ActivityFundingCreateNestedOneWithoutActivityInput {

    @Field(() => ActivityFundingCreateWithoutActivityInput, {nullable:true})
    @Type(() => ActivityFundingCreateWithoutActivityInput)
    create?: ActivityFundingCreateWithoutActivityInput;

    @Field(() => ActivityFundingCreateOrConnectWithoutActivityInput, {nullable:true})
    @Type(() => ActivityFundingCreateOrConnectWithoutActivityInput)
    connectOrCreate?: ActivityFundingCreateOrConnectWithoutActivityInput;

    @Field(() => ActivityFundingWhereUniqueInput, {nullable:true})
    @Type(() => ActivityFundingWhereUniqueInput)
    connect?: Prisma.AtLeast<ActivityFundingWhereUniqueInput, 'id' | 'activity_id'>;
}
