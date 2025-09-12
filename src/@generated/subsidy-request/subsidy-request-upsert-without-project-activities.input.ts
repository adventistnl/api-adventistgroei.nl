import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestUpdateWithoutProject_activitiesInput } from './subsidy-request-update-without-project-activities.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateWithoutProject_activitiesInput } from './subsidy-request-create-without-project-activities.input';
import { SubsidyRequestWhereInput } from './subsidy-request-where.input';

@InputType()
export class SubsidyRequestUpsertWithoutProject_activitiesInput {

    @Field(() => SubsidyRequestUpdateWithoutProject_activitiesInput, {nullable:false})
    @Type(() => SubsidyRequestUpdateWithoutProject_activitiesInput)
    update!: SubsidyRequestUpdateWithoutProject_activitiesInput;

    @Field(() => SubsidyRequestCreateWithoutProject_activitiesInput, {nullable:false})
    @Type(() => SubsidyRequestCreateWithoutProject_activitiesInput)
    create!: SubsidyRequestCreateWithoutProject_activitiesInput;

    @Field(() => SubsidyRequestWhereInput, {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    where?: SubsidyRequestWhereInput;
}
