import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';
import { Type } from 'class-transformer';
import { AvailabilityCreateInput } from './availability-create.input';
import { AvailabilityUpdateInput } from './availability-update.input';

@ArgsType()
export class UpsertOneAvailabilityArgs {

    @Field(() => AvailabilityWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityWhereUniqueInput)
    where!: Prisma.AtLeast<AvailabilityWhereUniqueInput, 'id' | 'user_id_date'>;

    @Field(() => AvailabilityCreateInput, {nullable:false})
    @Type(() => AvailabilityCreateInput)
    create!: AvailabilityCreateInput;

    @Field(() => AvailabilityUpdateInput, {nullable:false})
    @Type(() => AvailabilityUpdateInput)
    update!: AvailabilityUpdateInput;
}
