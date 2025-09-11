import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VoluntariesOnProjectsWhereUniqueInput } from './voluntaries-on-projects-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueVoluntariesOnProjectsArgs {

    @Field(() => VoluntariesOnProjectsWhereUniqueInput, {nullable:false})
    @Type(() => VoluntariesOnProjectsWhereUniqueInput)
    where!: Prisma.AtLeast<VoluntariesOnProjectsWhereUniqueInput, 'user_id_project_id'>;
}
