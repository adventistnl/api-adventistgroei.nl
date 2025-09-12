import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectActivityUpdateInput } from './project-activity-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';

@ArgsType()
export class UpdateOneProjectActivityArgs {

    @Field(() => ProjectActivityUpdateInput, {nullable:false})
    @Type(() => ProjectActivityUpdateInput)
    data!: ProjectActivityUpdateInput;

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:false})
    @Type(() => ProjectActivityWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;
}
