import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionPositionCreateWithoutInstitutionInput } from './institution-position-create-without-institution.input';
import { Type } from 'class-transformer';
import { InstitutionPositionCreateOrConnectWithoutInstitutionInput } from './institution-position-create-or-connect-without-institution.input';
import { InstitutionPositionUpsertWithWhereUniqueWithoutInstitutionInput } from './institution-position-upsert-with-where-unique-without-institution.input';
import { InstitutionPositionCreateManyInstitutionInputEnvelope } from './institution-position-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { InstitutionPositionWhereUniqueInput } from './institution-position-where-unique.input';
import { InstitutionPositionUpdateWithWhereUniqueWithoutInstitutionInput } from './institution-position-update-with-where-unique-without-institution.input';
import { InstitutionPositionUpdateManyWithWhereWithoutInstitutionInput } from './institution-position-update-many-with-where-without-institution.input';
import { InstitutionPositionScalarWhereInput } from './institution-position-scalar-where.input';

@InputType()
export class InstitutionPositionUncheckedUpdateManyWithoutInstitutionNestedInput {

    @Field(() => [InstitutionPositionCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => InstitutionPositionCreateWithoutInstitutionInput)
    create?: Array<InstitutionPositionCreateWithoutInstitutionInput>;

    @Field(() => [InstitutionPositionCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => InstitutionPositionCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<InstitutionPositionCreateOrConnectWithoutInstitutionInput>;

    @Field(() => [InstitutionPositionUpsertWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => InstitutionPositionUpsertWithWhereUniqueWithoutInstitutionInput)
    upsert?: Array<InstitutionPositionUpsertWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => InstitutionPositionCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => InstitutionPositionCreateManyInstitutionInputEnvelope)
    createMany?: InstitutionPositionCreateManyInstitutionInputEnvelope;

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

    @Field(() => [InstitutionPositionUpdateWithWhereUniqueWithoutInstitutionInput], {nullable:true})
    @Type(() => InstitutionPositionUpdateWithWhereUniqueWithoutInstitutionInput)
    update?: Array<InstitutionPositionUpdateWithWhereUniqueWithoutInstitutionInput>;

    @Field(() => [InstitutionPositionUpdateManyWithWhereWithoutInstitutionInput], {nullable:true})
    @Type(() => InstitutionPositionUpdateManyWithWhereWithoutInstitutionInput)
    updateMany?: Array<InstitutionPositionUpdateManyWithWhereWithoutInstitutionInput>;

    @Field(() => [InstitutionPositionScalarWhereInput], {nullable:true})
    @Type(() => InstitutionPositionScalarWhereInput)
    deleteMany?: Array<InstitutionPositionScalarWhereInput>;
}
