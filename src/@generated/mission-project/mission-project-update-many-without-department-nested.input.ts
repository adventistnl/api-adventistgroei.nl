import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissionProjectCreateWithoutDepartmentInput } from './mission-project-create-without-department.input';
import { Type } from 'class-transformer';
import { MissionProjectCreateOrConnectWithoutDepartmentInput } from './mission-project-create-or-connect-without-department.input';
import { MissionProjectUpsertWithWhereUniqueWithoutDepartmentInput } from './mission-project-upsert-with-where-unique-without-department.input';
import { MissionProjectCreateManyDepartmentInputEnvelope } from './mission-project-create-many-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MissionProjectWhereUniqueInput } from './mission-project-where-unique.input';
import { MissionProjectUpdateWithWhereUniqueWithoutDepartmentInput } from './mission-project-update-with-where-unique-without-department.input';
import { MissionProjectUpdateManyWithWhereWithoutDepartmentInput } from './mission-project-update-many-with-where-without-department.input';
import { MissionProjectScalarWhereInput } from './mission-project-scalar-where.input';

@InputType()
export class MissionProjectUpdateManyWithoutDepartmentNestedInput {

    @Field(() => [MissionProjectCreateWithoutDepartmentInput], {nullable:true})
    @Type(() => MissionProjectCreateWithoutDepartmentInput)
    create?: Array<MissionProjectCreateWithoutDepartmentInput>;

    @Field(() => [MissionProjectCreateOrConnectWithoutDepartmentInput], {nullable:true})
    @Type(() => MissionProjectCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: Array<MissionProjectCreateOrConnectWithoutDepartmentInput>;

    @Field(() => [MissionProjectUpsertWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    @Type(() => MissionProjectUpsertWithWhereUniqueWithoutDepartmentInput)
    upsert?: Array<MissionProjectUpsertWithWhereUniqueWithoutDepartmentInput>;

    @Field(() => MissionProjectCreateManyDepartmentInputEnvelope, {nullable:true})
    @Type(() => MissionProjectCreateManyDepartmentInputEnvelope)
    createMany?: MissionProjectCreateManyDepartmentInputEnvelope;

    @Field(() => [MissionProjectWhereUniqueInput], {nullable:true})
    @Type(() => MissionProjectWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MissionProjectWhereUniqueInput, 'id'>>;

    @Field(() => [MissionProjectWhereUniqueInput], {nullable:true})
    @Type(() => MissionProjectWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MissionProjectWhereUniqueInput, 'id'>>;

    @Field(() => [MissionProjectWhereUniqueInput], {nullable:true})
    @Type(() => MissionProjectWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MissionProjectWhereUniqueInput, 'id'>>;

    @Field(() => [MissionProjectWhereUniqueInput], {nullable:true})
    @Type(() => MissionProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MissionProjectWhereUniqueInput, 'id'>>;

    @Field(() => [MissionProjectUpdateWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    @Type(() => MissionProjectUpdateWithWhereUniqueWithoutDepartmentInput)
    update?: Array<MissionProjectUpdateWithWhereUniqueWithoutDepartmentInput>;

    @Field(() => [MissionProjectUpdateManyWithWhereWithoutDepartmentInput], {nullable:true})
    @Type(() => MissionProjectUpdateManyWithWhereWithoutDepartmentInput)
    updateMany?: Array<MissionProjectUpdateManyWithWhereWithoutDepartmentInput>;

    @Field(() => [MissionProjectScalarWhereInput], {nullable:true})
    @Type(() => MissionProjectScalarWhereInput)
    deleteMany?: Array<MissionProjectScalarWhereInput>;
}
