import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutCo_ownerInput } from './project-create-without-co-owner.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutCo_ownerInput } from './project-create-or-connect-without-co-owner.input';
import { ProjectUpsertWithWhereUniqueWithoutCo_ownerInput } from './project-upsert-with-where-unique-without-co-owner.input';
import { ProjectCreateManyCo_ownerInputEnvelope } from './project-create-many-co-owner-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithWhereUniqueWithoutCo_ownerInput } from './project-update-with-where-unique-without-co-owner.input';
import { ProjectUpdateManyWithWhereWithoutCo_ownerInput } from './project-update-many-with-where-without-co-owner.input';
import { ProjectScalarWhereInput } from './project-scalar-where.input';

@InputType()
export class ProjectUncheckedUpdateManyWithoutCo_ownerNestedInput {

    @Field(() => [ProjectCreateWithoutCo_ownerInput], {nullable:true})
    @Type(() => ProjectCreateWithoutCo_ownerInput)
    create?: Array<ProjectCreateWithoutCo_ownerInput>;

    @Field(() => [ProjectCreateOrConnectWithoutCo_ownerInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutCo_ownerInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutCo_ownerInput>;

    @Field(() => [ProjectUpsertWithWhereUniqueWithoutCo_ownerInput], {nullable:true})
    @Type(() => ProjectUpsertWithWhereUniqueWithoutCo_ownerInput)
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutCo_ownerInput>;

    @Field(() => ProjectCreateManyCo_ownerInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyCo_ownerInputEnvelope)
    createMany?: ProjectCreateManyCo_ownerInputEnvelope;

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

    @Field(() => [ProjectUpdateWithWhereUniqueWithoutCo_ownerInput], {nullable:true})
    @Type(() => ProjectUpdateWithWhereUniqueWithoutCo_ownerInput)
    update?: Array<ProjectUpdateWithWhereUniqueWithoutCo_ownerInput>;

    @Field(() => [ProjectUpdateManyWithWhereWithoutCo_ownerInput], {nullable:true})
    @Type(() => ProjectUpdateManyWithWhereWithoutCo_ownerInput)
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutCo_ownerInput>;

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    deleteMany?: Array<ProjectScalarWhereInput>;
}
