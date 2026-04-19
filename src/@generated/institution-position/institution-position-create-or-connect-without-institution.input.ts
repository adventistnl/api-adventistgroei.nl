import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionPositionWhereUniqueInput } from './institution-position-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionPositionCreateWithoutInstitutionInput } from './institution-position-create-without-institution.input';

@InputType()
export class InstitutionPositionCreateOrConnectWithoutInstitutionInput {

    @Field(() => InstitutionPositionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionPositionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionPositionWhereUniqueInput, 'id' | 'institution_id_position_type'>;

    @Field(() => InstitutionPositionCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => InstitutionPositionCreateWithoutInstitutionInput)
    create!: InstitutionPositionCreateWithoutInstitutionInput;
}
