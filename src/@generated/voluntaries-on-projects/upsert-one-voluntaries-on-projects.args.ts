import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VoluntariesOnProjectsWhereUniqueInput } from './voluntaries-on-projects-where-unique.input';
import { Type } from 'class-transformer';
import { VoluntariesOnProjectsCreateInput } from './voluntaries-on-projects-create.input';
import { VoluntariesOnProjectsUpdateInput } from './voluntaries-on-projects-update.input';

@ArgsType()
export class UpsertOneVoluntariesOnProjectsArgs {

    @Field(() => VoluntariesOnProjectsWhereUniqueInput, {nullable:false})
    @Type(() => VoluntariesOnProjectsWhereUniqueInput)
    where!: Prisma.AtLeast<VoluntariesOnProjectsWhereUniqueInput, 'user_id_project_id'>;

    @Field(() => VoluntariesOnProjectsCreateInput, {nullable:false})
    @Type(() => VoluntariesOnProjectsCreateInput)
    create!: VoluntariesOnProjectsCreateInput;

    @Field(() => VoluntariesOnProjectsUpdateInput, {nullable:false})
    @Type(() => VoluntariesOnProjectsUpdateInput)
    update!: VoluntariesOnProjectsUpdateInput;
}
