import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateWithoutActivity_fundingInput } from './project-activity-create-without-activity-funding.input';

@InputType()
export class ProjectActivityCreateOrConnectWithoutActivity_fundingInput {

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:false})
    @Type(() => ProjectActivityWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;

    @Field(() => ProjectActivityCreateWithoutActivity_fundingInput, {nullable:false})
    @Type(() => ProjectActivityCreateWithoutActivity_fundingInput)
    create!: ProjectActivityCreateWithoutActivity_fundingInput;
}
