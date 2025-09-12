import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityCreateWithoutSubsidy_requestInput } from './project-activity-create-without-subsidy-request.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateOrConnectWithoutSubsidy_requestInput } from './project-activity-create-or-connect-without-subsidy-request.input';
import { ProjectActivityCreateManySubsidy_requestInputEnvelope } from './project-activity-create-many-subsidy-request-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';

@InputType()
export class ProjectActivityUncheckedCreateNestedManyWithoutSubsidy_requestInput {

    @Field(() => [ProjectActivityCreateWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => ProjectActivityCreateWithoutSubsidy_requestInput)
    create?: Array<ProjectActivityCreateWithoutSubsidy_requestInput>;

    @Field(() => [ProjectActivityCreateOrConnectWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => ProjectActivityCreateOrConnectWithoutSubsidy_requestInput)
    connectOrCreate?: Array<ProjectActivityCreateOrConnectWithoutSubsidy_requestInput>;

    @Field(() => ProjectActivityCreateManySubsidy_requestInputEnvelope, {nullable:true})
    @Type(() => ProjectActivityCreateManySubsidy_requestInputEnvelope)
    createMany?: ProjectActivityCreateManySubsidy_requestInputEnvelope;

    @Field(() => [ProjectActivityWhereUniqueInput], {nullable:true})
    @Type(() => ProjectActivityWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>>;
}
