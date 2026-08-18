import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityCreateWithoutUserInput } from './availability-create-without-user.input';
import { Type } from 'class-transformer';
import { AvailabilityCreateOrConnectWithoutUserInput } from './availability-create-or-connect-without-user.input';
import { AvailabilityCreateManyUserInputEnvelope } from './availability-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';

@InputType()
export class AvailabilityUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [AvailabilityCreateWithoutUserInput], {nullable:true})
    @Type(() => AvailabilityCreateWithoutUserInput)
    create?: Array<AvailabilityCreateWithoutUserInput>;

    @Field(() => [AvailabilityCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AvailabilityCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AvailabilityCreateOrConnectWithoutUserInput>;

    @Field(() => AvailabilityCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AvailabilityCreateManyUserInputEnvelope)
    createMany?: AvailabilityCreateManyUserInputEnvelope;

    @Field(() => [AvailabilityWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AvailabilityWhereUniqueInput, 'id' | 'user_id_date'>>;
}
