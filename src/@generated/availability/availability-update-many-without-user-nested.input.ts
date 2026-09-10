import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityCreateWithoutUserInput } from './availability-create-without-user.input';
import { Type } from 'class-transformer';
import { AvailabilityCreateOrConnectWithoutUserInput } from './availability-create-or-connect-without-user.input';
import { AvailabilityUpsertWithWhereUniqueWithoutUserInput } from './availability-upsert-with-where-unique-without-user.input';
import { AvailabilityCreateManyUserInputEnvelope } from './availability-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AvailabilityWhereUniqueInput } from './availability-where-unique.input';
import { AvailabilityUpdateWithWhereUniqueWithoutUserInput } from './availability-update-with-where-unique-without-user.input';
import { AvailabilityUpdateManyWithWhereWithoutUserInput } from './availability-update-many-with-where-without-user.input';
import { AvailabilityScalarWhereInput } from './availability-scalar-where.input';

@InputType()
export class AvailabilityUpdateManyWithoutUserNestedInput {

    @Field(() => [AvailabilityCreateWithoutUserInput], {nullable:true})
    @Type(() => AvailabilityCreateWithoutUserInput)
    create?: Array<AvailabilityCreateWithoutUserInput>;

    @Field(() => [AvailabilityCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AvailabilityCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AvailabilityCreateOrConnectWithoutUserInput>;

    @Field(() => [AvailabilityUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AvailabilityUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<AvailabilityUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => AvailabilityCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AvailabilityCreateManyUserInputEnvelope)
    createMany?: AvailabilityCreateManyUserInputEnvelope;

    @Field(() => [AvailabilityWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AvailabilityWhereUniqueInput, 'id' | 'user_id_date'>>;

    @Field(() => [AvailabilityWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AvailabilityWhereUniqueInput, 'id' | 'user_id_date'>>;

    @Field(() => [AvailabilityWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AvailabilityWhereUniqueInput, 'id' | 'user_id_date'>>;

    @Field(() => [AvailabilityWhereUniqueInput], {nullable:true})
    @Type(() => AvailabilityWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AvailabilityWhereUniqueInput, 'id' | 'user_id_date'>>;

    @Field(() => [AvailabilityUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AvailabilityUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<AvailabilityUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [AvailabilityUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => AvailabilityUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<AvailabilityUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [AvailabilityScalarWhereInput], {nullable:true})
    @Type(() => AvailabilityScalarWhereInput)
    deleteMany?: Array<AvailabilityScalarWhereInput>;
}
