import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvailabilityHistoryWhereInput } from './availability-history-where.input';
import { Type } from 'class-transformer';
import { AvailabilityHistoryOrderByWithRelationInput } from './availability-history-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AvailabilityHistoryWhereUniqueInput } from './availability-history-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AvailabilityHistoryScalarFieldEnum } from './availability-history-scalar-field.enum';

@ArgsType()
export class FindFirstAvailabilityHistoryOrThrowArgs {

    @Field(() => AvailabilityHistoryWhereInput, {nullable:true})
    @Type(() => AvailabilityHistoryWhereInput)
    where?: AvailabilityHistoryWhereInput;

    @Field(() => [AvailabilityHistoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AvailabilityHistoryOrderByWithRelationInput>;

    @Field(() => AvailabilityHistoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AvailabilityHistoryWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AvailabilityHistoryScalarFieldEnum], {nullable:true})
    distinct?: Array<`${AvailabilityHistoryScalarFieldEnum}`>;
}
