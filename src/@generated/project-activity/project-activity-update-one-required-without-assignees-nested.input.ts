import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityCreateWithoutAssigneesInput } from './project-activity-create-without-assignees.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateOrConnectWithoutAssigneesInput } from './project-activity-create-or-connect-without-assignees.input';
import { ProjectActivityUpsertWithoutAssigneesInput } from './project-activity-upsert-without-assignees.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';
import { ProjectActivityUpdateToOneWithWhereWithoutAssigneesInput } from './project-activity-update-to-one-with-where-without-assignees.input';

@InputType()
export class ProjectActivityUpdateOneRequiredWithoutAssigneesNestedInput {

    @Field(() => ProjectActivityCreateWithoutAssigneesInput, {nullable:true})
    @Type(() => ProjectActivityCreateWithoutAssigneesInput)
    create?: ProjectActivityCreateWithoutAssigneesInput;

    @Field(() => ProjectActivityCreateOrConnectWithoutAssigneesInput, {nullable:true})
    @Type(() => ProjectActivityCreateOrConnectWithoutAssigneesInput)
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutAssigneesInput;

    @Field(() => ProjectActivityUpsertWithoutAssigneesInput, {nullable:true})
    @Type(() => ProjectActivityUpsertWithoutAssigneesInput)
    upsert?: ProjectActivityUpsertWithoutAssigneesInput;

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:true})
    @Type(() => ProjectActivityWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;

    @Field(() => ProjectActivityUpdateToOneWithWhereWithoutAssigneesInput, {nullable:true})
    @Type(() => ProjectActivityUpdateToOneWithWhereWithoutAssigneesInput)
    update?: ProjectActivityUpdateToOneWithWhereWithoutAssigneesInput;
}
