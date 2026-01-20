import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { Type } from 'class-transformer';
import { ChurchUpdateWithoutInstitutionInput } from './church-update-without-institution.input';
import { ChurchCreateWithoutInstitutionInput } from './church-create-without-institution.input';

@InputType()
export class ChurchUpsertWithWhereUniqueWithoutInstitutionInput {

    @Field(() => ChurchWhereUniqueInput, {nullable:false})
    @Type(() => ChurchWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>;

    @Field(() => ChurchUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => ChurchUpdateWithoutInstitutionInput)
    update!: ChurchUpdateWithoutInstitutionInput;

    @Field(() => ChurchCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => ChurchCreateWithoutInstitutionInput)
    create!: ChurchCreateWithoutInstitutionInput;
}
