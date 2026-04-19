import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutCo_ownerInput } from './project-create-without-co-owner.input';

@InputType()
export class ProjectCreateOrConnectWithoutCo_ownerInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectCreateWithoutCo_ownerInput, {nullable:false})
    @Type(() => ProjectCreateWithoutCo_ownerInput)
    create!: ProjectCreateWithoutCo_ownerInput;
}
