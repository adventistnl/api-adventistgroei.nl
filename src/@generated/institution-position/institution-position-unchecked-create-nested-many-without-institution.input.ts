import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionPositionCreateWithoutInstitutionInput } from './institution-position-create-without-institution.input';
import { Type } from 'class-transformer';
import { InstitutionPositionCreateOrConnectWithoutInstitutionInput } from './institution-position-create-or-connect-without-institution.input';
import { InstitutionPositionCreateManyInstitutionInputEnvelope } from './institution-position-create-many-institution-input-envelope.input';
import { Prisma } from '@prisma/client';
import { InstitutionPositionWhereUniqueInput } from './institution-position-where-unique.input';

@InputType()
export class InstitutionPositionUncheckedCreateNestedManyWithoutInstitutionInput {

    @Field(() => [InstitutionPositionCreateWithoutInstitutionInput], {nullable:true})
    @Type(() => InstitutionPositionCreateWithoutInstitutionInput)
    create?: Array<InstitutionPositionCreateWithoutInstitutionInput>;

    @Field(() => [InstitutionPositionCreateOrConnectWithoutInstitutionInput], {nullable:true})
    @Type(() => InstitutionPositionCreateOrConnectWithoutInstitutionInput)
    connectOrCreate?: Array<InstitutionPositionCreateOrConnectWithoutInstitutionInput>;

    @Field(() => InstitutionPositionCreateManyInstitutionInputEnvelope, {nullable:true})
    @Type(() => InstitutionPositionCreateManyInstitutionInputEnvelope)
    createMany?: InstitutionPositionCreateManyInstitutionInputEnvelope;

    @Field(() => [InstitutionPositionWhereUniqueInput], {nullable:true})
    @Type(() => InstitutionPositionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InstitutionPositionWhereUniqueInput, 'id' | 'institution_id_position_type'>>;
}
