import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityCreateWithoutSubsidy_request_itemsInput } from './project-activity-create-without-subsidy-request-items.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateOrConnectWithoutSubsidy_request_itemsInput } from './project-activity-create-or-connect-without-subsidy-request-items.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';

@InputType()
export class ProjectActivityCreateNestedOneWithoutSubsidy_request_itemsInput {

    @Field(() => ProjectActivityCreateWithoutSubsidy_request_itemsInput, {nullable:true})
    @Type(() => ProjectActivityCreateWithoutSubsidy_request_itemsInput)
    create?: ProjectActivityCreateWithoutSubsidy_request_itemsInput;

    @Field(() => ProjectActivityCreateOrConnectWithoutSubsidy_request_itemsInput, {nullable:true})
    @Type(() => ProjectActivityCreateOrConnectWithoutSubsidy_request_itemsInput)
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutSubsidy_request_itemsInput;

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:true})
    @Type(() => ProjectActivityWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;
}
