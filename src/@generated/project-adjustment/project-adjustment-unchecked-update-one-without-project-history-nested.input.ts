import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectAdjustmentCreateWithoutProject_historyInput } from './project-adjustment-create-without-project-history.input';
import { Type } from 'class-transformer';
import { ProjectAdjustmentCreateOrConnectWithoutProject_historyInput } from './project-adjustment-create-or-connect-without-project-history.input';
import { ProjectAdjustmentUpsertWithoutProject_historyInput } from './project-adjustment-upsert-without-project-history.input';
import { ProjectAdjustmentWhereInput } from './project-adjustment-where.input';
import { Prisma } from '@prisma/client';
import { ProjectAdjustmentWhereUniqueInput } from './project-adjustment-where-unique.input';
import { ProjectAdjustmentUpdateToOneWithWhereWithoutProject_historyInput } from './project-adjustment-update-to-one-with-where-without-project-history.input';

@InputType()
export class ProjectAdjustmentUncheckedUpdateOneWithoutProject_historyNestedInput {

    @Field(() => ProjectAdjustmentCreateWithoutProject_historyInput, {nullable:true})
    @Type(() => ProjectAdjustmentCreateWithoutProject_historyInput)
    create?: ProjectAdjustmentCreateWithoutProject_historyInput;

    @Field(() => ProjectAdjustmentCreateOrConnectWithoutProject_historyInput, {nullable:true})
    @Type(() => ProjectAdjustmentCreateOrConnectWithoutProject_historyInput)
    connectOrCreate?: ProjectAdjustmentCreateOrConnectWithoutProject_historyInput;

    @Field(() => ProjectAdjustmentUpsertWithoutProject_historyInput, {nullable:true})
    @Type(() => ProjectAdjustmentUpsertWithoutProject_historyInput)
    upsert?: ProjectAdjustmentUpsertWithoutProject_historyInput;

    @Field(() => ProjectAdjustmentWhereInput, {nullable:true})
    @Type(() => ProjectAdjustmentWhereInput)
    disconnect?: ProjectAdjustmentWhereInput;

    @Field(() => ProjectAdjustmentWhereInput, {nullable:true})
    @Type(() => ProjectAdjustmentWhereInput)
    delete?: ProjectAdjustmentWhereInput;

    @Field(() => ProjectAdjustmentWhereUniqueInput, {nullable:true})
    @Type(() => ProjectAdjustmentWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectAdjustmentWhereUniqueInput, 'id' | 'project_history_id'>;

    @Field(() => ProjectAdjustmentUpdateToOneWithWhereWithoutProject_historyInput, {nullable:true})
    @Type(() => ProjectAdjustmentUpdateToOneWithWhereWithoutProject_historyInput)
    update?: ProjectAdjustmentUpdateToOneWithWhereWithoutProject_historyInput;
}
