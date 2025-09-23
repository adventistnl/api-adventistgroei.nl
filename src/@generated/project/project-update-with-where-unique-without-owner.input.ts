import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutOwnerInput } from './project-update-without-owner.input';

@InputType()
export class ProjectUpdateWithWhereUniqueWithoutOwnerInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectUpdateWithoutOwnerInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutOwnerInput)
    data!: ProjectUpdateWithoutOwnerInput;
}
