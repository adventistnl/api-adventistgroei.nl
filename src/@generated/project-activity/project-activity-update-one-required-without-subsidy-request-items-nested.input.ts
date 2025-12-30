import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityCreateWithoutSubsidy_request_itemsInput } from './project-activity-create-without-subsidy-request-items.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateOrConnectWithoutSubsidy_request_itemsInput } from './project-activity-create-or-connect-without-subsidy-request-items.input';
import { ProjectActivityUpsertWithoutSubsidy_request_itemsInput } from './project-activity-upsert-without-subsidy-request-items.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';
import { ProjectActivityUpdateToOneWithWhereWithoutSubsidy_request_itemsInput } from './project-activity-update-to-one-with-where-without-subsidy-request-items.input';

@InputType()
export class ProjectActivityUpdateOneRequiredWithoutSubsidy_request_itemsNestedInput {

    @Field(() => ProjectActivityCreateWithoutSubsidy_request_itemsInput, {nullable:true})
    @Type(() => ProjectActivityCreateWithoutSubsidy_request_itemsInput)
    create?: ProjectActivityCreateWithoutSubsidy_request_itemsInput;

    @Field(() => ProjectActivityCreateOrConnectWithoutSubsidy_request_itemsInput, {nullable:true})
    @Type(() => ProjectActivityCreateOrConnectWithoutSubsidy_request_itemsInput)
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutSubsidy_request_itemsInput;

    @Field(() => ProjectActivityUpsertWithoutSubsidy_request_itemsInput, {nullable:true})
    @Type(() => ProjectActivityUpsertWithoutSubsidy_request_itemsInput)
    upsert?: ProjectActivityUpsertWithoutSubsidy_request_itemsInput;

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:true})
    @Type(() => ProjectActivityWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;

    @Field(() => ProjectActivityUpdateToOneWithWhereWithoutSubsidy_request_itemsInput, {nullable:true})
    @Type(() => ProjectActivityUpdateToOneWithWhereWithoutSubsidy_request_itemsInput)
    update?: ProjectActivityUpdateToOneWithWhereWithoutSubsidy_request_itemsInput;
}
