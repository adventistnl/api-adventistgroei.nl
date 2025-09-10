import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutProjectsInput } from './institution-create-without-projects.input';

@InputType()
export class InstitutionCreateOrConnectWithoutProjectsInput {

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionCreateWithoutProjectsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutProjectsInput)
    create!: InstitutionCreateWithoutProjectsInput;
}
