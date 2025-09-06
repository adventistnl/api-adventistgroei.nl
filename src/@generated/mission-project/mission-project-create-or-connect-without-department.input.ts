import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MissionProjectWhereUniqueInput } from './mission-project-where-unique.input';
import { Type } from 'class-transformer';
import { MissionProjectCreateWithoutDepartmentInput } from './mission-project-create-without-department.input';

@InputType()
export class MissionProjectCreateOrConnectWithoutDepartmentInput {

    @Field(() => MissionProjectWhereUniqueInput, {nullable:false})
    @Type(() => MissionProjectWhereUniqueInput)
    where!: Prisma.AtLeast<MissionProjectWhereUniqueInput, 'id'>;

    @Field(() => MissionProjectCreateWithoutDepartmentInput, {nullable:false})
    @Type(() => MissionProjectCreateWithoutDepartmentInput)
    create!: MissionProjectCreateWithoutDepartmentInput;
}
