import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityCreateWithoutSubsidy_requestInput } from './project-activity-create-without-subsidy-request.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateOrConnectWithoutSubsidy_requestInput } from './project-activity-create-or-connect-without-subsidy-request.input';
import { ProjectActivityUpsertWithWhereUniqueWithoutSubsidy_requestInput } from './project-activity-upsert-with-where-unique-without-subsidy-request.input';
import { ProjectActivityCreateManySubsidy_requestInputEnvelope } from './project-activity-create-many-subsidy-request-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';
import { ProjectActivityUpdateWithWhereUniqueWithoutSubsidy_requestInput } from './project-activity-update-with-where-unique-without-subsidy-request.input';
import { ProjectActivityUpdateManyWithWhereWithoutSubsidy_requestInput } from './project-activity-update-many-with-where-without-subsidy-request.input';
import { ProjectActivityScalarWhereInput } from './project-activity-scalar-where.input';

@InputType()
export class ProjectActivityUpdateManyWithoutSubsidy_requestNestedInput {

    @Field(() => [ProjectActivityCreateWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => ProjectActivityCreateWithoutSubsidy_requestInput)
    create?: Array<ProjectActivityCreateWithoutSubsidy_requestInput>;

    @Field(() => [ProjectActivityCreateOrConnectWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => ProjectActivityCreateOrConnectWithoutSubsidy_requestInput)
    connectOrCreate?: Array<ProjectActivityCreateOrConnectWithoutSubsidy_requestInput>;

    @Field(() => [ProjectActivityUpsertWithWhereUniqueWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => ProjectActivityUpsertWithWhereUniqueWithoutSubsidy_requestInput)
    upsert?: Array<ProjectActivityUpsertWithWhereUniqueWithoutSubsidy_requestInput>;

    @Field(() => ProjectActivityCreateManySubsidy_requestInputEnvelope, {nullable:true})
    @Type(() => ProjectActivityCreateManySubsidy_requestInputEnvelope)
    createMany?: ProjectActivityCreateManySubsidy_requestInputEnvelope;

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

    @Field(() => [ProjectActivityUpdateWithWhereUniqueWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => ProjectActivityUpdateWithWhereUniqueWithoutSubsidy_requestInput)
    update?: Array<ProjectActivityUpdateWithWhereUniqueWithoutSubsidy_requestInput>;

    @Field(() => [ProjectActivityUpdateManyWithWhereWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => ProjectActivityUpdateManyWithWhereWithoutSubsidy_requestInput)
    updateMany?: Array<ProjectActivityUpdateManyWithWhereWithoutSubsidy_requestInput>;

    @Field(() => [ProjectActivityScalarWhereInput], {nullable:true})
    @Type(() => ProjectActivityScalarWhereInput)
    deleteMany?: Array<ProjectActivityScalarWhereInput>;
}
