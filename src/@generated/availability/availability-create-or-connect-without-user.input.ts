import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';
import { Type } from 'class-transformer';
import { AvailabilityCreateWithoutUserInput } from './availability-create-without-user.input';

@InputType()
export class AvailabilityCreateOrConnectWithoutUserInput {

    @Field(() => AvailabilityWhereUniqueInput, {nullable:false})
    @Type(() => AvailabilityWhereUniqueInput)
    where!: Prisma.AtLeast<AvailabilityWhereUniqueInput, 'id' | 'user_id_date'>;

    @Field(() => AvailabilityCreateWithoutUserInput, {nullable:false})
    @Type(() => AvailabilityCreateWithoutUserInput)
    create!: AvailabilityCreateWithoutUserInput;
}
