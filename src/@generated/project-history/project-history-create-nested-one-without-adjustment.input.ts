import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectHistoryCreateWithoutAdjustmentInput } from './project-history-create-without-adjustment.input';
import { Type } from 'class-transformer';
import { ProjectHistoryCreateOrConnectWithoutAdjustmentInput } from './project-history-create-or-connect-without-adjustment.input';
import { Prisma } from '@prisma/client';
import { ProjectHistoryWhereUniqueInput } from './project-history-where-unique.input';

@InputType()
export class ProjectHistoryCreateNestedOneWithoutAdjustmentInput {

    @Field(() => ProjectHistoryCreateWithoutAdjustmentInput, {nullable:true})
    @Type(() => ProjectHistoryCreateWithoutAdjustmentInput)
    create?: ProjectHistoryCreateWithoutAdjustmentInput;

    @Field(() => ProjectHistoryCreateOrConnectWithoutAdjustmentInput, {nullable:true})
    @Type(() => ProjectHistoryCreateOrConnectWithoutAdjustmentInput)
    connectOrCreate?: ProjectHistoryCreateOrConnectWithoutAdjustmentInput;

    @Field(() => ProjectHistoryWhereUniqueInput, {nullable:true})
    @Type(() => ProjectHistoryWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectHistoryWhereUniqueInput, 'id'>;
}
