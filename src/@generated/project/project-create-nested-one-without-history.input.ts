import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutHistoryInput } from './project-create-without-history.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutHistoryInput } from './project-create-or-connect-without-history.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedOneWithoutHistoryInput {

    @Field(() => ProjectCreateWithoutHistoryInput, {nullable:true})
    @Type(() => ProjectCreateWithoutHistoryInput)
    create?: ProjectCreateWithoutHistoryInput;

    @Field(() => ProjectCreateOrConnectWithoutHistoryInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutHistoryInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutHistoryInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
}
