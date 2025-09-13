import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutEventInput } from './project-create-without-event.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutEventInput } from './project-create-or-connect-without-event.input';
import { ProjectUpsertWithWhereUniqueWithoutEventInput } from './project-upsert-with-where-unique-without-event.input';
import { ProjectCreateManyEventInputEnvelope } from './project-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithWhereUniqueWithoutEventInput } from './project-update-with-where-unique-without-event.input';
import { ProjectUpdateManyWithWhereWithoutEventInput } from './project-update-many-with-where-without-event.input';
import { ProjectScalarWhereInput } from './project-scalar-where.input';

@InputType()
export class ProjectUpdateManyWithoutEventNestedInput {

    @Field(() => [ProjectCreateWithoutEventInput], {nullable:true})
    @Type(() => ProjectCreateWithoutEventInput)
    create?: Array<ProjectCreateWithoutEventInput>;

    @Field(() => [ProjectCreateOrConnectWithoutEventInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutEventInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutEventInput>;

    @Field(() => [ProjectUpsertWithWhereUniqueWithoutEventInput], {nullable:true})
    @Type(() => ProjectUpsertWithWhereUniqueWithoutEventInput)
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutEventInput>;

    @Field(() => ProjectCreateManyEventInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyEventInputEnvelope)
    createMany?: ProjectCreateManyEventInputEnvelope;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectUpdateWithWhereUniqueWithoutEventInput], {nullable:true})
    @Type(() => ProjectUpdateWithWhereUniqueWithoutEventInput)
    update?: Array<ProjectUpdateWithWhereUniqueWithoutEventInput>;

    @Field(() => [ProjectUpdateManyWithWhereWithoutEventInput], {nullable:true})
    @Type(() => ProjectUpdateManyWithWhereWithoutEventInput)
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutEventInput>;

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    deleteMany?: Array<ProjectScalarWhereInput>;
}
