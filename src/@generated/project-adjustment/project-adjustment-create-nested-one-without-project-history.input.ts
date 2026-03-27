import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectAdjustmentCreateWithoutProject_historyInput } from './project-adjustment-create-without-project-history.input';
import { Type } from 'class-transformer';
import { ProjectAdjustmentCreateOrConnectWithoutProject_historyInput } from './project-adjustment-create-or-connect-without-project-history.input';
import { Prisma } from '@prisma/client';
import { ProjectAdjustmentWhereUniqueInput } from './project-adjustment-where-unique.input';

@InputType()
export class ProjectAdjustmentCreateNestedOneWithoutProject_historyInput {

    @Field(() => ProjectAdjustmentCreateWithoutProject_historyInput, {nullable:true})
    @Type(() => ProjectAdjustmentCreateWithoutProject_historyInput)
    create?: ProjectAdjustmentCreateWithoutProject_historyInput;

    @Field(() => ProjectAdjustmentCreateOrConnectWithoutProject_historyInput, {nullable:true})
    @Type(() => ProjectAdjustmentCreateOrConnectWithoutProject_historyInput)
    connectOrCreate?: ProjectAdjustmentCreateOrConnectWithoutProject_historyInput;

    @Field(() => ProjectAdjustmentWhereUniqueInput, {nullable:true})
    @Type(() => ProjectAdjustmentWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectAdjustmentWhereUniqueInput, 'id' | 'project_history_id'>;
}
