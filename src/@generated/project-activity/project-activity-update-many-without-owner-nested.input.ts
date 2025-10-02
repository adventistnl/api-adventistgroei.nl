import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityCreateWithoutOwnerInput } from './project-activity-create-without-owner.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateOrConnectWithoutOwnerInput } from './project-activity-create-or-connect-without-owner.input';
import { ProjectActivityUpsertWithWhereUniqueWithoutOwnerInput } from './project-activity-upsert-with-where-unique-without-owner.input';
import { ProjectActivityCreateManyOwnerInputEnvelope } from './project-activity-create-many-owner-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';
import { ProjectActivityUpdateWithWhereUniqueWithoutOwnerInput } from './project-activity-update-with-where-unique-without-owner.input';
import { ProjectActivityUpdateManyWithWhereWithoutOwnerInput } from './project-activity-update-many-with-where-without-owner.input';
import { ProjectActivityScalarWhereInput } from './project-activity-scalar-where.input';

@InputType()
export class ProjectActivityUpdateManyWithoutOwnerNestedInput {

    @Field(() => [ProjectActivityCreateWithoutOwnerInput], {nullable:true})
    @Type(() => ProjectActivityCreateWithoutOwnerInput)
    create?: Array<ProjectActivityCreateWithoutOwnerInput>;

    @Field(() => [ProjectActivityCreateOrConnectWithoutOwnerInput], {nullable:true})
    @Type(() => ProjectActivityCreateOrConnectWithoutOwnerInput)
    connectOrCreate?: Array<ProjectActivityCreateOrConnectWithoutOwnerInput>;

    @Field(() => [ProjectActivityUpsertWithWhereUniqueWithoutOwnerInput], {nullable:true})
    @Type(() => ProjectActivityUpsertWithWhereUniqueWithoutOwnerInput)
    upsert?: Array<ProjectActivityUpsertWithWhereUniqueWithoutOwnerInput>;

    @Field(() => ProjectActivityCreateManyOwnerInputEnvelope, {nullable:true})
    @Type(() => ProjectActivityCreateManyOwnerInputEnvelope)
    createMany?: ProjectActivityCreateManyOwnerInputEnvelope;

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

    @Field(() => [ProjectActivityUpdateWithWhereUniqueWithoutOwnerInput], {nullable:true})
    @Type(() => ProjectActivityUpdateWithWhereUniqueWithoutOwnerInput)
    update?: Array<ProjectActivityUpdateWithWhereUniqueWithoutOwnerInput>;

    @Field(() => [ProjectActivityUpdateManyWithWhereWithoutOwnerInput], {nullable:true})
    @Type(() => ProjectActivityUpdateManyWithWhereWithoutOwnerInput)
    updateMany?: Array<ProjectActivityUpdateManyWithWhereWithoutOwnerInput>;

    @Field(() => [ProjectActivityScalarWhereInput], {nullable:true})
    @Type(() => ProjectActivityScalarWhereInput)
    deleteMany?: Array<ProjectActivityScalarWhereInput>;
}
