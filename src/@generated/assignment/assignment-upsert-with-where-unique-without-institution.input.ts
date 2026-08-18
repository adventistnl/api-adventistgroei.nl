import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssignmentWhereUniqueInput } from './assignment-where-unique.input';
import { Type } from 'class-transformer';
import { AssignmentUpdateWithoutInstitutionInput } from './assignment-update-without-institution.input';
import { AssignmentCreateWithoutInstitutionInput } from './assignment-create-without-institution.input';

@InputType()
export class AssignmentUpsertWithWhereUniqueWithoutInstitutionInput {

    @Field(() => AssignmentWhereUniqueInput, {nullable:false})
    @Type(() => AssignmentWhereUniqueInput)
    where!: Prisma.AtLeast<AssignmentWhereUniqueInput, 'id' | 'church_id_date'>;

    @Field(() => AssignmentUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => AssignmentUpdateWithoutInstitutionInput)
    update!: AssignmentUpdateWithoutInstitutionInput;

    @Field(() => AssignmentCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => AssignmentCreateWithoutInstitutionInput)
    create!: AssignmentCreateWithoutInstitutionInput;
}
