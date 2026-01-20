import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityCreateWithoutAssigneesInput } from './project-activity-create-without-assignees.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateOrConnectWithoutAssigneesInput } from './project-activity-create-or-connect-without-assignees.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';

@InputType()
export class ProjectActivityCreateNestedOneWithoutAssigneesInput {

    @Field(() => ProjectActivityCreateWithoutAssigneesInput, {nullable:true})
    @Type(() => ProjectActivityCreateWithoutAssigneesInput)
    create?: ProjectActivityCreateWithoutAssigneesInput;

    @Field(() => ProjectActivityCreateOrConnectWithoutAssigneesInput, {nullable:true})
    @Type(() => ProjectActivityCreateOrConnectWithoutAssigneesInput)
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutAssigneesInput;

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:true})
    @Type(() => ProjectActivityWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;
}
