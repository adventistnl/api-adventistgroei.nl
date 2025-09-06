import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutDepartmentsInput } from './institution-create-without-departments.input';

@InputType()
export class InstitutionCreateOrConnectWithoutDepartmentsInput {

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionCreateWithoutDepartmentsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutDepartmentsInput)
    create!: InstitutionCreateWithoutDepartmentsInput;
}
