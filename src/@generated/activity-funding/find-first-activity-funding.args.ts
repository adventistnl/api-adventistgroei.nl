import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityFundingWhereInput } from './activity-funding-where.input';
import { Type } from 'class-transformer';
import { ActivityFundingOrderByWithRelationInput } from './activity-funding-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ActivityFundingWhereUniqueInput } from './activity-funding-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ActivityFundingScalarFieldEnum } from './activity-funding-scalar-field.enum';

@ArgsType()
export class FindFirstActivityFundingArgs {

    @Field(() => ActivityFundingWhereInput, {nullable:true})
    @Type(() => ActivityFundingWhereInput)
    where?: ActivityFundingWhereInput;

    @Field(() => [ActivityFundingOrderByWithRelationInput], {nullable:true})
    @Type(() => ActivityFundingOrderByWithRelationInput)
    orderBy?: Array<ActivityFundingOrderByWithRelationInput>;

    @Field(() => ActivityFundingWhereUniqueInput, {nullable:true})
    @Type(() => ActivityFundingWhereUniqueInput)
    cursor?: Prisma.AtLeast<ActivityFundingWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ActivityFundingScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ActivityFundingScalarFieldEnum}`>;
}
