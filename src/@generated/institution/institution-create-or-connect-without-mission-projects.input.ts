import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutMission_projectsInput } from './institution-create-without-mission-projects.input';

@InputType()
export class InstitutionCreateOrConnectWithoutMission_projectsInput {

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionCreateWithoutMission_projectsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutMission_projectsInput)
    create!: InstitutionCreateWithoutMission_projectsInput;
}
