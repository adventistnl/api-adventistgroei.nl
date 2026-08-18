import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssignmentWhereUniqueInput } from './assignment-where-unique.input';
import { Type } from 'class-transformer';
import { AssignmentCreateWithoutInstitutionInput } from './assignment-create-without-institution.input';

@InputType()
export class AssignmentCreateOrConnectWithoutInstitutionInput {

    @Field(() => AssignmentWhereUniqueInput, {nullable:false})
    @Type(() => AssignmentWhereUniqueInput)
    where!: Prisma.AtLeast<AssignmentWhereUniqueInput, 'id' | 'church_id_date'>;

    @Field(() => AssignmentCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => AssignmentCreateWithoutInstitutionInput)
    create!: AssignmentCreateWithoutInstitutionInput;
}
