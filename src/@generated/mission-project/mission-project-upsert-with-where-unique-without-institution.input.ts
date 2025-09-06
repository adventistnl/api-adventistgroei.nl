import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MissionProjectWhereUniqueInput } from './mission-project-where-unique.input';
import { Type } from 'class-transformer';
import { MissionProjectUpdateWithoutInstitutionInput } from './mission-project-update-without-institution.input';
import { MissionProjectCreateWithoutInstitutionInput } from './mission-project-create-without-institution.input';

@InputType()
export class MissionProjectUpsertWithWhereUniqueWithoutInstitutionInput {

    @Field(() => MissionProjectWhereUniqueInput, {nullable:false})
    @Type(() => MissionProjectWhereUniqueInput)
    where!: Prisma.AtLeast<MissionProjectWhereUniqueInput, 'id'>;

    @Field(() => MissionProjectUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => MissionProjectUpdateWithoutInstitutionInput)
    update!: MissionProjectUpdateWithoutInstitutionInput;

    @Field(() => MissionProjectCreateWithoutInstitutionInput, {nullable:false})
    @Type(() => MissionProjectCreateWithoutInstitutionInput)
    create!: MissionProjectCreateWithoutInstitutionInput;
}
