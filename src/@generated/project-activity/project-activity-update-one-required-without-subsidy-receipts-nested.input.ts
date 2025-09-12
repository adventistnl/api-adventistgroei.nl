import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityCreateWithoutSubsidy_receiptsInput } from './project-activity-create-without-subsidy-receipts.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateOrConnectWithoutSubsidy_receiptsInput } from './project-activity-create-or-connect-without-subsidy-receipts.input';
import { ProjectActivityUpsertWithoutSubsidy_receiptsInput } from './project-activity-upsert-without-subsidy-receipts.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';
import { ProjectActivityUpdateToOneWithWhereWithoutSubsidy_receiptsInput } from './project-activity-update-to-one-with-where-without-subsidy-receipts.input';

@InputType()
export class ProjectActivityUpdateOneRequiredWithoutSubsidy_receiptsNestedInput {

    @Field(() => ProjectActivityCreateWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => ProjectActivityCreateWithoutSubsidy_receiptsInput)
    create?: ProjectActivityCreateWithoutSubsidy_receiptsInput;

    @Field(() => ProjectActivityCreateOrConnectWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => ProjectActivityCreateOrConnectWithoutSubsidy_receiptsInput)
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutSubsidy_receiptsInput;

    @Field(() => ProjectActivityUpsertWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => ProjectActivityUpsertWithoutSubsidy_receiptsInput)
    upsert?: ProjectActivityUpsertWithoutSubsidy_receiptsInput;

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:true})
    @Type(() => ProjectActivityWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;

    @Field(() => ProjectActivityUpdateToOneWithWhereWithoutSubsidy_receiptsInput, {nullable:true})
    @Type(() => ProjectActivityUpdateToOneWithWhereWithoutSubsidy_receiptsInput)
    update?: ProjectActivityUpdateToOneWithWhereWithoutSubsidy_receiptsInput;
}
