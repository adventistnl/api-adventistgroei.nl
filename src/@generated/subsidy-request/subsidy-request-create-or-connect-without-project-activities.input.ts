import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateWithoutProject_activitiesInput } from './subsidy-request-create-without-project-activities.input';

@InputType()
export class SubsidyRequestCreateOrConnectWithoutProject_activitiesInput {

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestCreateWithoutProject_activitiesInput, {nullable:false})
    @Type(() => SubsidyRequestCreateWithoutProject_activitiesInput)
    create!: SubsidyRequestCreateWithoutProject_activitiesInput;
}
