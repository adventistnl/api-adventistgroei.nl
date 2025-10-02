import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateWithoutActivity_documentsInput } from './project-activity-create-without-activity-documents.input';

@InputType()
export class ProjectActivityCreateOrConnectWithoutActivity_documentsInput {

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:false})
    @Type(() => ProjectActivityWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;

    @Field(() => ProjectActivityCreateWithoutActivity_documentsInput, {nullable:false})
    @Type(() => ProjectActivityCreateWithoutActivity_documentsInput)
    create!: ProjectActivityCreateWithoutActivity_documentsInput;
}
