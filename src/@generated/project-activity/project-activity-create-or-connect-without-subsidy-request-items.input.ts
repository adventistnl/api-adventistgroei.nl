import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateWithoutSubsidy_request_itemsInput } from './project-activity-create-without-subsidy-request-items.input';

@InputType()
export class ProjectActivityCreateOrConnectWithoutSubsidy_request_itemsInput {

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:false})
    @Type(() => ProjectActivityWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;

    @Field(() => ProjectActivityCreateWithoutSubsidy_request_itemsInput, {nullable:false})
    @Type(() => ProjectActivityCreateWithoutSubsidy_request_itemsInput)
    create!: ProjectActivityCreateWithoutSubsidy_request_itemsInput;
}
