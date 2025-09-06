import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateWithoutSubsidy_activitiesInput } from './subsidy-request-create-without-subsidy-activities.input';

@InputType()
export class SubsidyRequestCreateOrConnectWithoutSubsidy_activitiesInput {

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestCreateWithoutSubsidy_activitiesInput, {nullable:false})
    @Type(() => SubsidyRequestCreateWithoutSubsidy_activitiesInput)
    create!: SubsidyRequestCreateWithoutSubsidy_activitiesInput;
}
