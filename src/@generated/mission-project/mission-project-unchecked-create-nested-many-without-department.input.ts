import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissionProjectCreateWithoutDepartmentInput } from './mission-project-create-without-department.input';
import { Type } from 'class-transformer';
import { MissionProjectCreateOrConnectWithoutDepartmentInput } from './mission-project-create-or-connect-without-department.input';
import { MissionProjectCreateManyDepartmentInputEnvelope } from './mission-project-create-many-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MissionProjectWhereUniqueInput } from './mission-project-where-unique.input';

@InputType()
export class MissionProjectUncheckedCreateNestedManyWithoutDepartmentInput {

    @Field(() => [MissionProjectCreateWithoutDepartmentInput], {nullable:true})
    @Type(() => MissionProjectCreateWithoutDepartmentInput)
    create?: Array<MissionProjectCreateWithoutDepartmentInput>;

    @Field(() => [MissionProjectCreateOrConnectWithoutDepartmentInput], {nullable:true})
    @Type(() => MissionProjectCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: Array<MissionProjectCreateOrConnectWithoutDepartmentInput>;

    @Field(() => MissionProjectCreateManyDepartmentInputEnvelope, {nullable:true})
    @Type(() => MissionProjectCreateManyDepartmentInputEnvelope)
    createMany?: MissionProjectCreateManyDepartmentInputEnvelope;

    @Field(() => [MissionProjectWhereUniqueInput], {nullable:true})
    @Type(() => MissionProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MissionProjectWhereUniqueInput, 'id'>>;
}
