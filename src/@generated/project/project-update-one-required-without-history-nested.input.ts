import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutHistoryInput } from './project-create-without-history.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutHistoryInput } from './project-create-or-connect-without-history.input';
import { ProjectUpsertWithoutHistoryInput } from './project-upsert-without-history.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateToOneWithWhereWithoutHistoryInput } from './project-update-to-one-with-where-without-history.input';

@InputType()
export class ProjectUpdateOneRequiredWithoutHistoryNestedInput {

    @Field(() => ProjectCreateWithoutHistoryInput, {nullable:true})
    @Type(() => ProjectCreateWithoutHistoryInput)
    create?: ProjectCreateWithoutHistoryInput;

    @Field(() => ProjectCreateOrConnectWithoutHistoryInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutHistoryInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutHistoryInput;

    @Field(() => ProjectUpsertWithoutHistoryInput, {nullable:true})
    @Type(() => ProjectUpsertWithoutHistoryInput)
    upsert?: ProjectUpsertWithoutHistoryInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectUpdateToOneWithWhereWithoutHistoryInput, {nullable:true})
    @Type(() => ProjectUpdateToOneWithWhereWithoutHistoryInput)
    update?: ProjectUpdateToOneWithWhereWithoutHistoryInput;
}
