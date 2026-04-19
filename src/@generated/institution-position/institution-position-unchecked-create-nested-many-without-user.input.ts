import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionPositionCreateWithoutUserInput } from './institution-position-create-without-user.input';
import { Type } from 'class-transformer';
import { InstitutionPositionCreateOrConnectWithoutUserInput } from './institution-position-create-or-connect-without-user.input';
import { InstitutionPositionCreateManyUserInputEnvelope } from './institution-position-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { InstitutionPositionWhereUniqueInput } from './institution-position-where-unique.input';

@InputType()
export class InstitutionPositionUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [InstitutionPositionCreateWithoutUserInput], {nullable:true})
    @Type(() => InstitutionPositionCreateWithoutUserInput)
    create?: Array<InstitutionPositionCreateWithoutUserInput>;

    @Field(() => [InstitutionPositionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => InstitutionPositionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<InstitutionPositionCreateOrConnectWithoutUserInput>;

    @Field(() => InstitutionPositionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => InstitutionPositionCreateManyUserInputEnvelope)
    createMany?: InstitutionPositionCreateManyUserInputEnvelope;

    @Field(() => [InstitutionPositionWhereUniqueInput], {nullable:true})
    @Type(() => InstitutionPositionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InstitutionPositionWhereUniqueInput, 'id' | 'institution_id_position_type'>>;
}
