import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutActivitiesInput } from './project-create-without-activities.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutActivitiesInput } from './project-create-or-connect-without-activities.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedOneWithoutActivitiesInput {

    @Field(() => ProjectCreateWithoutActivitiesInput, {nullable:true})
    @Type(() => ProjectCreateWithoutActivitiesInput)
    create?: ProjectCreateWithoutActivitiesInput;

    @Field(() => ProjectCreateOrConnectWithoutActivitiesInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutActivitiesInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutActivitiesInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
}
