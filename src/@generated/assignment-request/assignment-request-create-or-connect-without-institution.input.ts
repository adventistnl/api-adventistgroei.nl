import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssignmentRequestWhereUniqueInput } from './assignment-request-where-unique.input';
import { Type } from 'class-transformer';
import { AssignmentRequestCreateWithoutInstitutionInput } from './assignment-request-create-without-institution.input';

@InputType()
export class AssignmentRequestCreateOrConnectWithoutInstitutionInput {

    @Field(() => AssignmentRequestWhereUniqueInput, {nullable:false})
    @Type(() => AssignmentRequestWhereUniqueInput)
    where!: Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>;

    @Field(() => AssignmentRequestCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => AssignmentRequestCreateWithoutInstitutionInput)
    create!: AssignmentRequestCreateWithoutInstitutionInput;
}
