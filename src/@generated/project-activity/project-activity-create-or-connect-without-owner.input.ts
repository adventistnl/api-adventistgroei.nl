import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateWithoutOwnerInput } from './project-activity-create-without-owner.input';

@InputType()
export class ProjectActivityCreateOrConnectWithoutOwnerInput {

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:false})
    @Type(() => ProjectActivityWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;

    @Field(() => ProjectActivityCreateWithoutOwnerInput, {nullable:false})
    @Type(() => ProjectActivityCreateWithoutOwnerInput)
    create!: ProjectActivityCreateWithoutOwnerInput;
}
