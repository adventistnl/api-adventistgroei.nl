import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutSubsidiesInput } from './project-create-without-subsidies.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutSubsidiesInput } from './project-create-or-connect-without-subsidies.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedOneWithoutSubsidiesInput {

    @Field(() => ProjectCreateWithoutSubsidiesInput, {nullable:true})
    @Type(() => ProjectCreateWithoutSubsidiesInput)
    create?: ProjectCreateWithoutSubsidiesInput;

    @Field(() => ProjectCreateOrConnectWithoutSubsidiesInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutSubsidiesInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutSubsidiesInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
}
