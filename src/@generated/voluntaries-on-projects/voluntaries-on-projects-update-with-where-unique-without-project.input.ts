import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VoluntariesOnProjectsWhereUniqueInput } from './voluntaries-on-projects-where-unique.input';
import { Type } from 'class-transformer';
import { VoluntariesOnProjectsUpdateWithoutProjectInput } from './voluntaries-on-projects-update-without-project.input';

@InputType()
export class VoluntariesOnProjectsUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => VoluntariesOnProjectsWhereUniqueInput, {nullable:false})
    @Type(() => VoluntariesOnProjectsWhereUniqueInput)
    where!: Prisma.AtLeast<VoluntariesOnProjectsWhereUniqueInput, 'user_id_project_id'>;

    @Field(() => VoluntariesOnProjectsUpdateWithoutProjectInput, {nullable:false})
    @Type(() => VoluntariesOnProjectsUpdateWithoutProjectInput)
    data!: VoluntariesOnProjectsUpdateWithoutProjectInput;
}
