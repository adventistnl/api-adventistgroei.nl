import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionPositionCreateWithoutUserInput } from './institution-position-create-without-user.input';
import { Type } from 'class-transformer';
import { InstitutionPositionCreateOrConnectWithoutUserInput } from './institution-position-create-or-connect-without-user.input';
import { InstitutionPositionUpsertWithWhereUniqueWithoutUserInput } from './institution-position-upsert-with-where-unique-without-user.input';
import { InstitutionPositionCreateManyUserInputEnvelope } from './institution-position-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { InstitutionPositionWhereUniqueInput } from './institution-position-where-unique.input';
import { InstitutionPositionUpdateWithWhereUniqueWithoutUserInput } from './institution-position-update-with-where-unique-without-user.input';
import { InstitutionPositionUpdateManyWithWhereWithoutUserInput } from './institution-position-update-many-with-where-without-user.input';
import { InstitutionPositionScalarWhereInput } from './institution-position-scalar-where.input';

@InputType()
export class InstitutionPositionUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [InstitutionPositionCreateWithoutUserInput], {nullable:true})
    @Type(() => InstitutionPositionCreateWithoutUserInput)
    create?: Array<InstitutionPositionCreateWithoutUserInput>;

    @Field(() => [InstitutionPositionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => InstitutionPositionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<InstitutionPositionCreateOrConnectWithoutUserInput>;

    @Field(() => [InstitutionPositionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => InstitutionPositionUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<InstitutionPositionUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => InstitutionPositionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => InstitutionPositionCreateManyUserInputEnvelope)
    createMany?: InstitutionPositionCreateManyUserInputEnvelope;

    @Field(() => [InstitutionPositionWhereUniqueInput], {nullable:true})
    @Type(() => InstitutionPositionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<InstitutionPositionWhereUniqueInput, 'id' | 'institution_id_position_type'>>;

    @Field(() => [InstitutionPositionWhereUniqueInput], {nullable:true})
    @Type(() => InstitutionPositionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<InstitutionPositionWhereUniqueInput, 'id' | 'institution_id_position_type'>>;

    @Field(() => [InstitutionPositionWhereUniqueInput], {nullable:true})
    @Type(() => InstitutionPositionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<InstitutionPositionWhereUniqueInput, 'id' | 'institution_id_position_type'>>;

    @Field(() => [InstitutionPositionWhereUniqueInput], {nullable:true})
    @Type(() => InstitutionPositionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InstitutionPositionWhereUniqueInput, 'id' | 'institution_id_position_type'>>;

    @Field(() => [InstitutionPositionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => InstitutionPositionUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<InstitutionPositionUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [InstitutionPositionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => InstitutionPositionUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<InstitutionPositionUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [InstitutionPositionScalarWhereInput], {nullable:true})
    @Type(() => InstitutionPositionScalarWhereInput)
    deleteMany?: Array<InstitutionPositionScalarWhereInput>;
}
