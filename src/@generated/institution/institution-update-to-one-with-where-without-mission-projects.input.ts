import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { InstitutionUpdateWithoutMission_projectsInput } from './institution-update-without-mission-projects.input';

@InputType()
export class InstitutionUpdateToOneWithWhereWithoutMission_projectsInput {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => InstitutionUpdateWithoutMission_projectsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutMission_projectsInput)
    data!: InstitutionUpdateWithoutMission_projectsInput;
}
