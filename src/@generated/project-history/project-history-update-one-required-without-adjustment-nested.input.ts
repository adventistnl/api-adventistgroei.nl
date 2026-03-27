import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectHistoryCreateWithoutAdjustmentInput } from './project-history-create-without-adjustment.input';
import { Type } from 'class-transformer';
import { ProjectHistoryCreateOrConnectWithoutAdjustmentInput } from './project-history-create-or-connect-without-adjustment.input';
import { ProjectHistoryUpsertWithoutAdjustmentInput } from './project-history-upsert-without-adjustment.input';
import { Prisma } from '@prisma/client';
import { ProjectHistoryWhereUniqueInput } from './project-history-where-unique.input';
import { ProjectHistoryUpdateToOneWithWhereWithoutAdjustmentInput } from './project-history-update-to-one-with-where-without-adjustment.input';

@InputType()
export class ProjectHistoryUpdateOneRequiredWithoutAdjustmentNestedInput {

    @Field(() => ProjectHistoryCreateWithoutAdjustmentInput, {nullable:true})
    @Type(() => ProjectHistoryCreateWithoutAdjustmentInput)
    create?: ProjectHistoryCreateWithoutAdjustmentInput;

    @Field(() => ProjectHistoryCreateOrConnectWithoutAdjustmentInput, {nullable:true})
    @Type(() => ProjectHistoryCreateOrConnectWithoutAdjustmentInput)
    connectOrCreate?: ProjectHistoryCreateOrConnectWithoutAdjustmentInput;

    @Field(() => ProjectHistoryUpsertWithoutAdjustmentInput, {nullable:true})
    @Type(() => ProjectHistoryUpsertWithoutAdjustmentInput)
    upsert?: ProjectHistoryUpsertWithoutAdjustmentInput;

    @Field(() => ProjectHistoryWhereUniqueInput, {nullable:true})
    @Type(() => ProjectHistoryWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectHistoryWhereUniqueInput, 'id'>;

    @Field(() => ProjectHistoryUpdateToOneWithWhereWithoutAdjustmentInput, {nullable:true})
    @Type(() => ProjectHistoryUpdateToOneWithWhereWithoutAdjustmentInput)
    update?: ProjectHistoryUpdateToOneWithWhereWithoutAdjustmentInput;
}
