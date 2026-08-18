import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssignmentWhereUniqueInput } from './assignment-where-unique.input';
import { Type } from 'class-transformer';
import { AssignmentUpdateWithoutInstitutionInput } from './assignment-update-without-institution.input';

@InputType()
export class AssignmentUpdateWithWhereUniqueWithoutInstitutionInput {

    @Field(() => AssignmentWhereUniqueInput, {nullable:false})
    @Type(() => AssignmentWhereUniqueInput)
    where!: Prisma.AtLeast<AssignmentWhereUniqueInput, 'id' | 'church_id_date'>;

    @Field(() => AssignmentUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => AssignmentUpdateWithoutInstitutionInput)
    data!: AssignmentUpdateWithoutInstitutionInput;
}
