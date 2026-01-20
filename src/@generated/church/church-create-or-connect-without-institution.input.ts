import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { Type } from 'class-transformer';
import { ChurchCreateWithoutInstitutionInput } from './church-create-without-institution.input';

@InputType()
export class ChurchCreateOrConnectWithoutInstitutionInput {

    @Field(() => ChurchWhereUniqueInput, {nullable:false})
    @Type(() => ChurchWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>;

    @Field(() => ChurchCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => ChurchCreateWithoutInstitutionInput)
    create!: ChurchCreateWithoutInstitutionInput;
}
