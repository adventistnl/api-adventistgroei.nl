import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityCreateWithoutLogsInput } from './project-activity-create-without-logs.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateOrConnectWithoutLogsInput } from './project-activity-create-or-connect-without-logs.input';
import { ProjectActivityUpsertWithoutLogsInput } from './project-activity-upsert-without-logs.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';
import { ProjectActivityUpdateToOneWithWhereWithoutLogsInput } from './project-activity-update-to-one-with-where-without-logs.input';

@InputType()
export class ProjectActivityUpdateOneRequiredWithoutLogsNestedInput {

    @Field(() => ProjectActivityCreateWithoutLogsInput, {nullable:true})
    @Type(() => ProjectActivityCreateWithoutLogsInput)
    create?: ProjectActivityCreateWithoutLogsInput;

    @Field(() => ProjectActivityCreateOrConnectWithoutLogsInput, {nullable:true})
    @Type(() => ProjectActivityCreateOrConnectWithoutLogsInput)
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutLogsInput;

    @Field(() => ProjectActivityUpsertWithoutLogsInput, {nullable:true})
    @Type(() => ProjectActivityUpsertWithoutLogsInput)
    upsert?: ProjectActivityUpsertWithoutLogsInput;

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:true})
    @Type(() => ProjectActivityWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;

    @Field(() => ProjectActivityUpdateToOneWithWhereWithoutLogsInput, {nullable:true})
    @Type(() => ProjectActivityUpdateToOneWithWhereWithoutLogsInput)
    update?: ProjectActivityUpdateToOneWithWhereWithoutLogsInput;
}
