import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutAssignmentsInput } from './institution-create-without-assignments.input';

@InputType()
export class InstitutionCreateOrConnectWithoutAssignmentsInput {

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionCreateWithoutAssignmentsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutAssignmentsInput)
    create!: InstitutionCreateWithoutAssignmentsInput;
}
