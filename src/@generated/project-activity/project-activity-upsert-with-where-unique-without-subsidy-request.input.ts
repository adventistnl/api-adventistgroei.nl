import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectActivityUpdateWithoutSubsidy_requestInput } from './project-activity-update-without-subsidy-request.input';
import { ProjectActivityCreateWithoutSubsidy_requestInput } from './project-activity-create-without-subsidy-request.input';

@InputType()
export class ProjectActivityUpsertWithWhereUniqueWithoutSubsidy_requestInput {

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:false})
    @Type(() => ProjectActivityWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;

    @Field(() => ProjectActivityUpdateWithoutSubsidy_requestInput, {nullable:false})
    @Type(() => ProjectActivityUpdateWithoutSubsidy_requestInput)
    update!: ProjectActivityUpdateWithoutSubsidy_requestInput;

    @Field(() => ProjectActivityCreateWithoutSubsidy_requestInput, {nullable:false})
    @Type(() => ProjectActivityCreateWithoutSubsidy_requestInput)
    create!: ProjectActivityCreateWithoutSubsidy_requestInput;
}
