import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityCreateWithoutActivity_documentsInput } from './project-activity-create-without-activity-documents.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateOrConnectWithoutActivity_documentsInput } from './project-activity-create-or-connect-without-activity-documents.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';

@InputType()
export class ProjectActivityCreateNestedOneWithoutActivity_documentsInput {

    @Field(() => ProjectActivityCreateWithoutActivity_documentsInput, {nullable:true})
    @Type(() => ProjectActivityCreateWithoutActivity_documentsInput)
    create?: ProjectActivityCreateWithoutActivity_documentsInput;

    @Field(() => ProjectActivityCreateOrConnectWithoutActivity_documentsInput, {nullable:true})
    @Type(() => ProjectActivityCreateOrConnectWithoutActivity_documentsInput)
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutActivity_documentsInput;

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:true})
    @Type(() => ProjectActivityWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;
}
