import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { Type } from 'class-transformer';
import { ChurchUpdateWithoutInstitutionInput } from './church-update-without-institution.input';

@InputType()
export class ChurchUpdateWithWhereUniqueWithoutInstitutionInput {

    @Field(() => ChurchWhereUniqueInput, {nullable:false})
    @Type(() => ChurchWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>;

    @Field(() => ChurchUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => ChurchUpdateWithoutInstitutionInput)
    data!: ChurchUpdateWithoutInstitutionInput;
}
