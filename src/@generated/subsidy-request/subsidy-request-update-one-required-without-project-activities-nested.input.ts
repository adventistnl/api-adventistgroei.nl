import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateWithoutProject_activitiesInput } from './subsidy-request-create-without-project-activities.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateOrConnectWithoutProject_activitiesInput } from './subsidy-request-create-or-connect-without-project-activities.input';
import { SubsidyRequestUpsertWithoutProject_activitiesInput } from './subsidy-request-upsert-without-project-activities.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { SubsidyRequestUpdateToOneWithWhereWithoutProject_activitiesInput } from './subsidy-request-update-to-one-with-where-without-project-activities.input';

@InputType()
export class SubsidyRequestUpdateOneRequiredWithoutProject_activitiesNestedInput {

    @Field(() => SubsidyRequestCreateWithoutProject_activitiesInput, {nullable:true})
    @Type(() => SubsidyRequestCreateWithoutProject_activitiesInput)
    create?: SubsidyRequestCreateWithoutProject_activitiesInput;

    @Field(() => SubsidyRequestCreateOrConnectWithoutProject_activitiesInput, {nullable:true})
    @Type(() => SubsidyRequestCreateOrConnectWithoutProject_activitiesInput)
    connectOrCreate?: SubsidyRequestCreateOrConnectWithoutProject_activitiesInput;

    @Field(() => SubsidyRequestUpsertWithoutProject_activitiesInput, {nullable:true})
    @Type(() => SubsidyRequestUpsertWithoutProject_activitiesInput)
    upsert?: SubsidyRequestUpsertWithoutProject_activitiesInput;

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    connect?: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestUpdateToOneWithWhereWithoutProject_activitiesInput, {nullable:true})
    @Type(() => SubsidyRequestUpdateToOneWithWhereWithoutProject_activitiesInput)
    update?: SubsidyRequestUpdateToOneWithWhereWithoutProject_activitiesInput;
}
