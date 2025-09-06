import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutMission_projectsInput } from './institution-create-without-mission-projects.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutMission_projectsInput } from './institution-create-or-connect-without-mission-projects.input';
import { InstitutionUpsertWithoutMission_projectsInput } from './institution-upsert-without-mission-projects.input';
import { InstitutionWhereInput } from './institution-where.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { InstitutionUpdateToOneWithWhereWithoutMission_projectsInput } from './institution-update-to-one-with-where-without-mission-projects.input';

@InputType()
export class InstitutionUpdateOneWithoutMission_projectsNestedInput {

    @Field(() => InstitutionCreateWithoutMission_projectsInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutMission_projectsInput)
    create?: InstitutionCreateWithoutMission_projectsInput;

    @Field(() => InstitutionCreateOrConnectWithoutMission_projectsInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutMission_projectsInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutMission_projectsInput;

    @Field(() => InstitutionUpsertWithoutMission_projectsInput, {nullable:true})
    @Type(() => InstitutionUpsertWithoutMission_projectsInput)
    upsert?: InstitutionUpsertWithoutMission_projectsInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    disconnect?: InstitutionWhereInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    delete?: InstitutionWhereInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionUpdateToOneWithWhereWithoutMission_projectsInput, {nullable:true})
    @Type(() => InstitutionUpdateToOneWithWhereWithoutMission_projectsInput)
    update?: InstitutionUpdateToOneWithWhereWithoutMission_projectsInput;
}
