import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutMission_projectsInput } from './institution-create-without-mission-projects.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutMission_projectsInput } from './institution-create-or-connect-without-mission-projects.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';

@InputType()
export class InstitutionCreateNestedOneWithoutMission_projectsInput {

    @Field(() => InstitutionCreateWithoutMission_projectsInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutMission_projectsInput)
    create?: InstitutionCreateWithoutMission_projectsInput;

    @Field(() => InstitutionCreateOrConnectWithoutMission_projectsInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutMission_projectsInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutMission_projectsInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;
}
