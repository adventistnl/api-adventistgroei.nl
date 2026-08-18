import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvailabilityHistoryUpdateInput } from './availability-history-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AvailabilityHistoryWhereUniqueInput } from './availability-history-where-unique.input';

@ArgsType()
export class UpdateOneAvailabilityHistoryArgs {

    @Field(() => AvailabilityHistoryUpdateInput, {nullable:false})
    @Type(() => AvailabilityHistoryUpdateInput)
    data!: AvailabilityHistoryUpdateInput;

    @Field(() => AvailabilityHistoryWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<AvailabilityHistoryWhereUniqueInput, 'id'>;
}
