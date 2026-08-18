import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AvailabilityHistoryWhereUniqueInput } from './availability-history-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAvailabilityHistoryArgs {

    @Field(() => AvailabilityHistoryWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityHistoryWhereUniqueInput)
    where!: Prisma.AtLeast<AvailabilityHistoryWhereUniqueInput, 'id'>;
}
