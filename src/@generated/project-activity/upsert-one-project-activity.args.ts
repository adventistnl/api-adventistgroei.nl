import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateInput } from './project-activity-create.input';
import { ProjectActivityUpdateInput } from './project-activity-update.input';

@ArgsType()
export class UpsertOneProjectActivityArgs {

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:false})
    @Type(() => ProjectActivityWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;

    @Field(() => ProjectActivityCreateInput, {nullable:false})
    @Type(() => ProjectActivityCreateInput)
    create!: ProjectActivityCreateInput;

    @Field(() => ProjectActivityUpdateInput, {nullable:false})
    @Type(() => ProjectActivityUpdateInput)
    update!: ProjectActivityUpdateInput;
}
