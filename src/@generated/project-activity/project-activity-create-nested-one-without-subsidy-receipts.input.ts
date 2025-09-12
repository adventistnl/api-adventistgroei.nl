import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityCreateWithoutSubsidy_receiptsInput } from './project-activity-create-without-subsidy-receipts.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateOrConnectWithoutSubsidy_receiptsInput } from './project-activity-create-or-connect-without-subsidy-receipts.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';

@InputType()
export class ProjectActivityCreateNestedOneWithoutSubsidy_receiptsInput {

    @Field(() => ProjectActivityCreateWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => ProjectActivityCreateWithoutSubsidy_receiptsInput)
    create?: ProjectActivityCreateWithoutSubsidy_receiptsInput;

    @Field(() => ProjectActivityCreateOrConnectWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => ProjectActivityCreateOrConnectWithoutSubsidy_receiptsInput)
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutSubsidy_receiptsInput;

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:true})
    @Type(() => ProjectActivityWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;
}
