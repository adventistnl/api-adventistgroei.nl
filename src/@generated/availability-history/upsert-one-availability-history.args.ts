import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AvailabilityHistoryWhereUniqueInput } from './availability-history-where-unique.input';
import { Type } from 'class-transformer';
import { AvailabilityHistoryCreateInput } from './availability-history-create.input';
import { AvailabilityHistoryUpdateInput } from './availability-history-update.input';

@ArgsType()
export class UpsertOneAvailabilityHistoryArgs {

    @Field(() => AvailabilityHistoryWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<AvailabilityHistoryWhereUniqueInput, 'id'>;

    @Field(() => AvailabilityHistoryCreateInput, {nullable:false})
    @Type(() => AvailabilityHistoryCreateInput)
    create!: AvailabilityHistoryCreateInput;

    @Field(() => AvailabilityHistoryUpdateInput, {nullable:false})
    @Type(() => AvailabilityHistoryUpdateInput)
    update!: AvailabilityHistoryUpdateInput;
}
