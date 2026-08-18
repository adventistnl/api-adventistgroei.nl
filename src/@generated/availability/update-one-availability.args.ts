import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvailabilityUpdateInput } from './availability-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';

@ArgsType()
export class UpdateOneAvailabilityArgs {

    @Field(() => AvailabilityUpdateInput, {nullable:false})
    @Type(() => AvailabilityUpdateInput)
    data!: AvailabilityUpdateInput;

    @Field(() => AvailabilityWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityWhereUniqueInput)
    where!: Prisma.AtLeast<AvailabilityWhereUniqueInput, 'id' | 'user_id_date'>;
}
