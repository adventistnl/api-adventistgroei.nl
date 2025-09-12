import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateWithoutSubsidy_receiptsInput } from './project-activity-create-without-subsidy-receipts.input';

@InputType()
export class ProjectActivityCreateOrConnectWithoutSubsidy_receiptsInput {

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:false})
    @Type(() => ProjectActivityWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;

    @Field(() => ProjectActivityCreateWithoutSubsidy_receiptsInput, {nullable:false})
    @Type(() => ProjectActivityCreateWithoutSubsidy_receiptsInput)
    create!: ProjectActivityCreateWithoutSubsidy_receiptsInput;
}
