import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutCo_ownerInput } from './project-update-without-co-owner.input';

@InputType()
export class ProjectUpdateWithWhereUniqueWithoutCo_ownerInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectUpdateWithoutCo_ownerInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutCo_ownerInput)
    data!: ProjectUpdateWithoutCo_ownerInput;
}
