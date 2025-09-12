import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityCreateWithoutProjectInput } from './project-activity-create-without-project.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateOrConnectWithoutProjectInput } from './project-activity-create-or-connect-without-project.input';
import { ProjectActivityUpsertWithWhereUniqueWithoutProjectInput } from './project-activity-upsert-with-where-unique-without-project.input';
import { ProjectActivityCreateManyProjectInputEnvelope } from './project-activity-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';
import { ProjectActivityUpdateWithWhereUniqueWithoutProjectInput } from './project-activity-update-with-where-unique-without-project.input';
import { ProjectActivityUpdateManyWithWhereWithoutProjectInput } from './project-activity-update-many-with-where-without-project.input';
import { ProjectActivityScalarWhereInput } from './project-activity-scalar-where.input';

@InputType()
export class ProjectActivityUpdateManyWithoutProjectNestedInput {

    @Field(() => [ProjectActivityCreateWithoutProjectInput], {nullable:true})
    @Type(() => ProjectActivityCreateWithoutProjectInput)
    create?: Array<ProjectActivityCreateWithoutProjectInput>;

    @Field(() => [ProjectActivityCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => ProjectActivityCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<ProjectActivityCreateOrConnectWithoutProjectInput>;

    @Field(() => [ProjectActivityUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => ProjectActivityUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<ProjectActivityUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => ProjectActivityCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => ProjectActivityCreateManyProjectInputEnvelope)
    createMany?: ProjectActivityCreateManyProjectInputEnvelope;

    @Field(() => [ProjectActivityWhereUniqueInput], {nullable:true})
    @Type(() => ProjectActivityWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectActivityWhereUniqueInput], {nullable:true})
    @Type(() => ProjectActivityWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectActivityWhereUniqueInput], {nullable:true})
    @Type(() => ProjectActivityWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectActivityWhereUniqueInput], {nullable:true})
    @Type(() => ProjectActivityWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectActivityUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => ProjectActivityUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<ProjectActivityUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [ProjectActivityUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => ProjectActivityUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<ProjectActivityUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [ProjectActivityScalarWhereInput], {nullable:true})
    @Type(() => ProjectActivityScalarWhereInput)
    deleteMany?: Array<ProjectActivityScalarWhereInput>;
}
