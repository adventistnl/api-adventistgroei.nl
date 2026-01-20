import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityCreateWithoutActivity_documentsInput } from './project-activity-create-without-activity-documents.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateOrConnectWithoutActivity_documentsInput } from './project-activity-create-or-connect-without-activity-documents.input';
import { ProjectActivityUpsertWithoutActivity_documentsInput } from './project-activity-upsert-without-activity-documents.input';
import { ProjectActivityWhereInput } from './project-activity-where.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';
import { ProjectActivityUpdateToOneWithWhereWithoutActivity_documentsInput } from './project-activity-update-to-one-with-where-without-activity-documents.input';

@InputType()
export class ProjectActivityUpdateOneWithoutActivity_documentsNestedInput {

    @Field(() => ProjectActivityCreateWithoutActivity_documentsInput, {nullable:true})
    @Type(() => ProjectActivityCreateWithoutActivity_documentsInput)
    create?: ProjectActivityCreateWithoutActivity_documentsInput;

    @Field(() => ProjectActivityCreateOrConnectWithoutActivity_documentsInput, {nullable:true})
    @Type(() => ProjectActivityCreateOrConnectWithoutActivity_documentsInput)
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutActivity_documentsInput;

    @Field(() => ProjectActivityUpsertWithoutActivity_documentsInput, {nullable:true})
    @Type(() => ProjectActivityUpsertWithoutActivity_documentsInput)
    upsert?: ProjectActivityUpsertWithoutActivity_documentsInput;

    @Field(() => ProjectActivityWhereInput, {nullable:true})
    @Type(() => ProjectActivityWhereInput)
    disconnect?: ProjectActivityWhereInput;

    @Field(() => ProjectActivityWhereInput, {nullable:true})
    @Type(() => ProjectActivityWhereInput)
    delete?: ProjectActivityWhereInput;

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:true})
    @Type(() => ProjectActivityWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;

    @Field(() => ProjectActivityUpdateToOneWithWhereWithoutActivity_documentsInput, {nullable:true})
    @Type(() => ProjectActivityUpdateToOneWithWhereWithoutActivity_documentsInput)
    update?: ProjectActivityUpdateToOneWithWhereWithoutActivity_documentsInput;
}
