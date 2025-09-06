import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MissionProjectWhereUniqueInput } from './mission-project-where-unique.input';
import { Type } from 'class-transformer';
import { MissionProjectUpdateWithoutInstitutionInput } from './mission-project-update-without-institution.input';

@InputType()
export class MissionProjectUpdateWithWhereUniqueWithoutInstitutionInput {

    @Field(() => MissionProjectWhereUniqueInput, {nullable:false})
    @Type(() => MissionProjectWhereUniqueInput)
    where!: Prisma.AtLeast<MissionProjectWhereUniqueInput, 'id'>;

    @Field(() => MissionProjectUpdateWithoutInstitutionInput, {nullable:false})
    @Type(() => MissionProjectUpdateWithoutInstitutionInput)
    data!: MissionProjectUpdateWithoutInstitutionInput;
}
