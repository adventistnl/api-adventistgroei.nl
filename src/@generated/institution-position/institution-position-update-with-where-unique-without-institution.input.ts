import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionPositionWhereUniqueInput } from './institution-position-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionPositionUpdateWithoutInstitutionInput } from './institution-position-update-without-institution.input';

@InputType()
export class InstitutionPositionUpdateWithWhereUniqueWithoutInstitutionInput {

    @Field(() => InstitutionPositionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionPositionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionPositionWhereUniqueInput, 'id' | 'institution_id_position_type'>;

    @Field(() => InstitutionPositionUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => InstitutionPositionUpdateWithoutInstitutionInput)
    data!: InstitutionPositionUpdateWithoutInstitutionInput;
}
