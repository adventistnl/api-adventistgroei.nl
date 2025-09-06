import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionUpdateWithoutMission_projectsInput } from './institution-update-without-mission-projects.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutMission_projectsInput } from './institution-create-without-mission-projects.input';
import { InstitutionWhereInput } from './institution-where.input';

@InputType()
export class InstitutionUpsertWithoutMission_projectsInput {

    @Field(() => InstitutionUpdateWithoutMission_projectsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutMission_projectsInput)
    update!: InstitutionUpdateWithoutMission_projectsInput;

    @Field(() => InstitutionCreateWithoutMission_projectsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutMission_projectsInput)
    create!: InstitutionCreateWithoutMission_projectsInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;
}
