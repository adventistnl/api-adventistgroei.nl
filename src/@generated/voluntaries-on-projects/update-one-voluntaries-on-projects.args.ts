import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VoluntariesOnProjectsUpdateInput } from './voluntaries-on-projects-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { VoluntariesOnProjectsWhereUniqueInput } from './voluntaries-on-projects-where-unique.input';

@ArgsType()
export class UpdateOneVoluntariesOnProjectsArgs {

    @Field(() => VoluntariesOnProjectsUpdateInput, {nullable:false})
    @Type(() => VoluntariesOnProjectsUpdateInput)
    data!: VoluntariesOnProjectsUpdateInput;

    @Field(() => VoluntariesOnProjectsWhereUniqueInput, {nullable:false})
    @Type(() => VoluntariesOnProjectsWhereUniqueInput)
    where!: Prisma.AtLeast<VoluntariesOnProjectsWhereUniqueInput, 'user_id_project_id'>;
}
