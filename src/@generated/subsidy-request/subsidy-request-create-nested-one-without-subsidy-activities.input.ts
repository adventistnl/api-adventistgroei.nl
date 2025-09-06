import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateWithoutSubsidy_activitiesInput } from './subsidy-request-create-without-subsidy-activities.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateOrConnectWithoutSubsidy_activitiesInput } from './subsidy-request-create-or-connect-without-subsidy-activities.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';

@InputType()
export class SubsidyRequestCreateNestedOneWithoutSubsidy_activitiesInput {

    @Field(() => SubsidyRequestCreateWithoutSubsidy_activitiesInput, {nullable:true})
    @Type(() => SubsidyRequestCreateWithoutSubsidy_activitiesInput)
    create?: SubsidyRequestCreateWithoutSubsidy_activitiesInput;

    @Field(() => SubsidyRequestCreateOrConnectWithoutSubsidy_activitiesInput, {nullable:true})
    @Type(() => SubsidyRequestCreateOrConnectWithoutSubsidy_activitiesInput)
    connectOrCreate?: SubsidyRequestCreateOrConnectWithoutSubsidy_activitiesInput;

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    connect?: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;
}
