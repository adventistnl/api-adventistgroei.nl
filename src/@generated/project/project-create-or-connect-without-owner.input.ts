import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutOwnerInput } from './project-create-without-owner.input';

@InputType()
export class ProjectCreateOrConnectWithoutOwnerInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectCreateWithoutOwnerInput, {nullable:false})
    @Type(() => ProjectCreateWithoutOwnerInput)
    create!: ProjectCreateWithoutOwnerInput;
}
