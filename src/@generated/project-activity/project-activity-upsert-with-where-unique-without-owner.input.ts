import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectActivityUpdateWithoutOwnerInput } from './project-activity-update-without-owner.input';
import { ProjectActivityCreateWithoutOwnerInput } from './project-activity-create-without-owner.input';

@InputType()
export class ProjectActivityUpsertWithWhereUniqueWithoutOwnerInput {

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:false})
    @Type(() => ProjectActivityWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;

    @Field(() => ProjectActivityUpdateWithoutOwnerInput, {nullable:false})
    @Type(() => ProjectActivityUpdateWithoutOwnerInput)
    update!: ProjectActivityUpdateWithoutOwnerInput;

    @Field(() => ProjectActivityCreateWithoutOwnerInput, {nullable:false})
    @Type(() => ProjectActivityCreateWithoutOwnerInput)
    create!: ProjectActivityCreateWithoutOwnerInput;
}
