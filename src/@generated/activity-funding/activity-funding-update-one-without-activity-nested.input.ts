import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityFundingCreateWithoutActivityInput } from './activity-funding-create-without-activity.input';
import { Type } from 'class-transformer';
import { ActivityFundingCreateOrConnectWithoutActivityInput } from './activity-funding-create-or-connect-without-activity.input';
import { ActivityFundingUpsertWithoutActivityInput } from './activity-funding-upsert-without-activity.input';
import { ActivityFundingWhereInput } from './activity-funding-where.input';
import { Prisma } from '@prisma/client';
import { ActivityFundingWhereUniqueInput } from './activity-funding-where-unique.input';
import { ActivityFundingUpdateToOneWithWhereWithoutActivityInput } from './activity-funding-update-to-one-with-where-without-activity.input';

@InputType()
export class ActivityFundingUpdateOneWithoutActivityNestedInput {

    @Field(() => ActivityFundingCreateWithoutActivityInput, {nullable:true})
    @Type(() => ActivityFundingCreateWithoutActivityInput)
    create?: ActivityFundingCreateWithoutActivityInput;

    @Field(() => ActivityFundingCreateOrConnectWithoutActivityInput, {nullable:true})
    @Type(() => ActivityFundingCreateOrConnectWithoutActivityInput)
    connectOrCreate?: ActivityFundingCreateOrConnectWithoutActivityInput;

    @Field(() => ActivityFundingUpsertWithoutActivityInput, {nullable:true})
    @Type(() => ActivityFundingUpsertWithoutActivityInput)
    upsert?: ActivityFundingUpsertWithoutActivityInput;

    @Field(() => ActivityFundingWhereInput, {nullable:true})
    @Type(() => ActivityFundingWhereInput)
    disconnect?: ActivityFundingWhereInput;

    @Field(() => ActivityFundingWhereInput, {nullable:true})
    @Type(() => ActivityFundingWhereInput)
    delete?: ActivityFundingWhereInput;

    @Field(() => ActivityFundingWhereUniqueInput, {nullable:true})
    @Type(() => ActivityFundingWhereUniqueInput)
    connect?: Prisma.AtLeast<ActivityFundingWhereUniqueInput, 'id' | 'activity_id'>;

    @Field(() => ActivityFundingUpdateToOneWithWhereWithoutActivityInput, {nullable:true})
    @Type(() => ActivityFundingUpdateToOneWithWhereWithoutActivityInput)
    update?: ActivityFundingUpdateToOneWithWhereWithoutActivityInput;
}
